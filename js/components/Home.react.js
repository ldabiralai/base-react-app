import React from 'react'
import {Link} from 'react-router'

import HelloWorld from './HelloWorld.react'

class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <Link to='/page'>
          Another page
        </Link>
      </div>    
    );
  }
}

export default App
