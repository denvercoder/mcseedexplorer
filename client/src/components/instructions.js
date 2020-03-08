import React, { Component } from 'react'

export default class Instructions extends Component {
  render() {
    return (
      <div style={{ height: '300px' }}>
        <h3>Instructions</h3>
        <p>
          <a href='https://www.youtube.com/watch?v=MCRYNyW2jtU'>
            Here is a quick video I made showing how to use this current
            version.
          </a>
        </p>
        <h4>HERE IS HOW TO USE IT</h4>
        <p>
          <ul>
            <li>
              Click "Create User" and enter a username. It must be more than 5
              characters.{' '}
            </li>
            <li>
              Enter your username and REMEMBER IT When you add a seed you will
              need to enter in the username.
            </li>
            <li>
              After you've clicked the "Create New User" button it will take you
              to the main page.
            </li>
            <li>
              Then click "Create Seed" Enter all of your information and then
              click "Add Seed" You will then be taken back to the main page and
              you'll be able to see your seed you just added, (hopefully)
            </li>
          </ul>
        </p>
      </div>
    )
  }
}
