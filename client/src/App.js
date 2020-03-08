import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar'
import ListSeeds from './components/list-seeds'
import EditSeed from './components/edit-seed'
import CreateSeed from './components/create-seed'
import CreateUser from './components/create-user'
import Instructions from './components/instructions'

function App() {
  return (
    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Route path='/' exact component={ListSeeds} />
        <Route path='/edit/:id' component={EditSeed} />
        <Route path='/create' component={CreateSeed} />
        <Route path='/user' component={CreateUser} />
        <Route path='/instructions' component={Instructions} />
      </div>
    </Router>
  )
}

export default App
