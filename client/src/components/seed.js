import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Seed = props => (
  <tr>
    <td>{props.seed.seed}</td>
    <td>{props.seed.spawnCoordX}</td>
    <td>{props.seed.spawnCoordY}</td>
    <td>{props.seed.spawnCoordZ}</td>
    <td>{props.seed.nearVillageCoordX}</td>
    <td>{props.seed.nearVillageCoordY}</td>
    <td>{props.seed.nearVillageCoordZ}</td>
    <td>{props.seed.hasCleric ? '✅' : '❌'}</td>
    <td>{props.seed.hasLoot ? '✅' : '❌'}</td>
    <td>{props.seed.nearStrongholdCoordX}</td>
    <td>{props.seed.nearStrongholdCoordY}</td>
    <td>{props.seed.nearStrongholdCoordZ}</td>
    <td>{props.seed.numberOfEnderEyes}</td>
    <td>{props.seed.anythingSpecial}</td>
    <td>
      <Link to={'/edit/' + props.seed._id}>edit</Link>
    </td>
  </tr>
)

export default Seed
