import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class EditSeed extends Component {
  constructor(props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: '',
      seed: '',
      spawnCoordX: '',
      spawnCoordY: '',
      spawnCoordZ: '',
      nearVillageCoordX: '',
      nearVillageCoordY: '',
      nearVillageCoordZ: '',
      hasLoot: false,
      hasCleric: false,
      nearStrongholdCoordX: '',
      nearStrongholdCoordY: '',
      nearStrongholdCoordZ: '',
      numberOfEnderEyes: '',
      anythingSpecial: ''
    }
  }

  componentDidMount() {
    axios
      .get(
        'https://damp-oasis-40442.herokuapp.com/users/seeds/' +
          this.props.match.params.id
      )
      .then(res => {
        this.setState({
          username: res.data.username,
          seed: res.data.seed,
          spawnCoordX: res.data.spawnCoordX,
          spawnCoordY: res.data.spawnCoordY,
          spawnCoordZ: res.data.spawnCoordZ,
          nearVillageCoordX: res.data.nearVillageCoordX,
          nearVillageCoordY: res.data.nearVillageCoordY,
          nearVillageCoordZ: res.data.nearVillageCoordZ,
          hasLoot: res.data.hasLoot,
          hasCleric: res.data.hasCleric,
          nearStrongholdCoordX: res.data.nearStrongholdCoordX,
          nearStrongholdCoordY: res.data.nearStrongholdCoordY,
          nearStrongholdCoordZ: res.data.nearStrongholdCoordZ,
          numberOfEnderEyes: res.data.numberOfEnderEyes,
          anythingSpecial: res.data.anythingSpecial
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCheckChange(e) {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const seed = {
      username: this.state.username,
      seed: this.state.seed,
      spawnCoordX: this.state.spawnCoordX,
      spawnCoordY: this.state.spawnCoordY,
      spawnCoordZ: this.state.spawnCoordZ,
      nearVillageCoordX: this.state.nearVillageCoordX,
      nearVillageCoordY: this.state.nearVillageCoordY,
      nearVillageCoordZ: this.state.nearVillageCoordZ,
      nearStrongholdCoordX: this.state.nearStrongholdCoordX,
      nearStrongholdCoordY: this.state.nearStrongholdCoordY,
      nearStrongholdCoordZ: this.state.nearStrongholdCoordZ,
      numberOfEnderEyes: this.state.numberOfEnderEyes,
      anythingSpecial: this.state.anythingSpecial,
      hasLoot: this.state.hasLoot,
      hasCleric: this.state.hasCleric
    }

    console.log(seed)

    axios
      .post(
        'https://damp-oasis-40442.herokuapp.com/users/seeds/update/' +
          this.props.match.params.id,
        seed
      )
      .then(res => console.log(res.data))

    window.location = '/'
  }

  render() {
    return (
      <div>
        <h3>Edit Seed</h3>
        <Link to='/instructions'>Instructions</Link>
        <form onSubmit={this.onSubmit}>
          <div className='form-group row'>
            <div className='col-sm-6'>
              <label htmlFor='username'>Username: </label>
              <input
                type='text'
                name='username'
                // disabled
                id='username'
                required
                className='form-control'
                value={this.state.username}
                onChange={this.handleTextChange}
              />
            </div>
            <div className='col-sm-6'>
              <label htmlFor='seed'>Seed #: </label>

              <input
                type='number'
                id='seed'
                name='seed'
                disabled
                required
                className='form-control'
                value={this.state.seed}
                onChange={this.handleTextChange}
              />
              <span style={{ color: 'red', fontSize: '16px' }}>
                {'   '}cannot modify seed, delete and then recreate it
              </span>
            </div>
          </div>
          <div style={{ border: '2px solid #808080', padding: '12px' }}>
            <h3>SPAWN</h3>
            <div className='form-group row'>
              <div className='col-sm-4'>
                <label htmlFor='spawnCoordX'>X Coord for Spawn:</label>
                <input
                  type='number'
                  id='spawnCoordX'
                  name='spawnCoordX'
                  required
                  className='form-control'
                  value={this.state.spawnCoordX}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='spawnCoordY'>Y Coord for Spawn:</label>
                <input
                  type='number'
                  id='spawnCoordY'
                  name='spawnCoordY'
                  required
                  className='form-control'
                  value={this.state.spawnCoordY}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='spawnCoordZ'>Z Coord for Spawn:</label>
                <input
                  type='number'
                  id='spawnCoordZ'
                  name='spawnCoordZ'
                  required
                  className='form-control'
                  value={this.state.spawnCoordZ}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              border: '2px solid #808080',
              padding: '12px',
              marginTop: '6px'
            }}
          >
            <h3>VILLAGE</h3>
            <div className='form-group row'>
              <div className='col-sm-4'>
                <label htmlFor='nearVillageCoordX'>
                  X Coord for Nearest Village:
                </label>
                <input
                  type='number'
                  id='nearVillageCoordX'
                  name='nearVillageCoordX'
                  required
                  className='form-control'
                  value={this.state.nearVillageCoordX}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='nearVillageCoordY'>
                  Y Coord for Nearest Village:
                </label>
                <input
                  type='number'
                  id='nearVillageCoordY'
                  name='nearVillageCoordY'
                  required
                  className='form-control'
                  value={this.state.nearVillageCoordY}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='nearVillageCoordZ'>
                  Z Coord for Nearest Village:
                </label>
                <input
                  type='number'
                  id='nearVillageCoordZ'
                  name='nearVillageCoordZ'
                  required
                  className='form-control'
                  value={this.state.nearVillageCoordZ}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div style={{ padding: '12px' }}>
              <div className='form-group row'>
                <div className='form-check form-check-inline'>
                  <input
                    type='checkbox'
                    id='hasCleric'
                    name='hasCleric'
                    className='form-check-input'
                    checked={this.state.hasCleric}
                    onChange={this.handleCheckChange}
                  />
                  <label className='form-check-label' htmlFor='hasCleric'>
                    Village has Cleric?
                  </label>
                </div>
                <div className='form-check form-check-inline'>
                  <input
                    type='checkbox'
                    id='hasLoot'
                    name='hasLoot'
                    className='form-check-input'
                    checked={this.state.hasLoot}
                    onChange={this.handleCheckChange}
                  />
                  <label className='form-check-label' htmlFor='hasLoot'>
                    Village has Loot?
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              border: '2px solid #808080',
              padding: '12px',
              marginTop: '6px'
            }}
          >
            <h3>STRONGHOLD</h3>
            <div className='form-group row'>
              <div className='col-sm-4'>
                <label htmlFor='nearStrongholdCoordX'>
                  X Coord for Nearest Stronghold:
                </label>
                <input
                  type='number'
                  id='nearStrongholdCoordX'
                  name='nearStrongholdCoordX'
                  required
                  className='form-control'
                  value={this.state.nearStrongholdCoordX}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='nearStrongholdCoordY'>
                  Y Coord for Nearest Stronghold:
                </label>
                <input
                  type='number'
                  id='nearStrongholdCoordY'
                  name='nearStrongholdCoordY'
                  required
                  className='form-control'
                  value={this.state.nearStrongholdCoordY}
                  onChange={this.handleTextChange}
                />
              </div>
              <div className='col-sm-4'>
                <label htmlFor='nearStrongholdCoordZ'>
                  Z Coord for Nearest Stronghold:
                </label>
                <input
                  type='number'
                  id='nearStrongholdCoordZ'
                  name='nearStrongholdCoordZ'
                  required
                  className='form-control'
                  value={this.state.nearStrongholdCoordZ}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-3'>
                <label htmlFor='numberOfEnderEyes'>
                  Number of Eyes of Ender:
                </label>
                <input
                  type='number'
                  id='numberOfEnderEyes'
                  name='numberOfEnderEyes'
                  required
                  className='form-control'
                  value={this.state.numberOfEnderEyes}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
          </div>
          <div style={{ border: '2px solid #808080', padding: '12px' }}>
            <h3>Is there anything else cool or unique about this seed?</h3>
            <div className='form-group row'>
              <div className='col-sm-12'>
                <textarea
                  type='text'
                  id='anythingSpecial'
                  name='anythingSpecial'
                  className='form-control'
                  value={this.state.anythingSpecial}
                  onChange={this.handleTextChange}
                />
              </div>
            </div>
          </div>
          <div style={{ padding: '12px', margin: '6px' }}>
            <div className='form-group row'>
              <div className='col-sm-4'>
                <input
                  type='submit'
                  value='Save Changes'
                  className='btn btn-primary'
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
