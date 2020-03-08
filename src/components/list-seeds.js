import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Seed from './seed'

export default class ListSeeds extends Component {
  constructor(props) {
    super(props)

    this.deleteSeed = this.deleteSeed.bind(this)

    this.state = { seeds: [] }
  }

  componentDidMount() {
    axios
      .get('https://damp-oasis-40442.herokuapp.com/seeds/')
      .then(res => {
        this.setState({ seeds: res.data })
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteSeed(id) {
    axios
      .delete('https://damp-oasis-40442.herokuapp.com/seeds/' + id)
      .then(res => console.log(res.data))

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  seedList() {
    return this.state.seeds.map(currentSeed => {
      return (
        <Seed
          seed={currentSeed}
          deleteSeed={this.deleteSeed}
          key={currentSeed._id}
        />
      )
    })
  }

  render() {
    return (
      <div>
        <h3>Seeds</h3>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Seed #</th>
              <th>Spawn X:</th>
              <th>Spawn Y:</th>
              <th>Spawn Z:</th>
              <th>Nearest Village X:</th>
              <th>Nearest Village Y:</th>
              <th>Nearest Village Z:</th>
              <th>Has Cleric</th>
              <th>Has Loot</th>
              <th>Nearest Stronghold X:</th>
              <th>Nearest Stronghold Y:</th>
              <th>Nearest Stronghold Z:</th>
              <th>Number of Ender Eyes:</th>
              <th>Anything Special?</th>
            </tr>
          </thead>
          <tbody>{this.seedList()}</tbody>
        </table>
      </div>
    )
  }
}
