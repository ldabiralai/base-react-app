import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'

import Home from './components/Home.react'
import APage from './components/APage.react'
import "../css/main.sass"

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/page" component={APage} />
  </Router>,
  document.getElementById('app')
);
