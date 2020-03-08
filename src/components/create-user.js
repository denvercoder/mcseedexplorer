import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
  constructor(props) {
    super(props)

    this.handleTextChange = this.handleTextChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      username: ''
    }
  }

  handleTextChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      username: this.state.username
    }

    axios
      .post('https://damp-oasis-40442.herokuapp.com/users/users/add', user)
      .then(res => console.log(res.data))

    window.location = '/'
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className='form-group row'>
            <div className='col-sm-6'>
              <label htmlFor='username'>Username: </label>
              <input
                type='text'
                name='username'
                id='username'
                required
                className='form-control'
                value={this.state.username}
                onChange={this.handleTextChange}
              />
            </div>
          </div>
          <div className='form-group row'>
            <div className='col-sm-4'>
              <input
                type='submit'
                value='Create New User'
                className='btn btn-primary'
              />
            </div>
          </div>
        </form>
      </div>
    )
  }
}
