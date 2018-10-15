import React, { Component } from 'react';
import Cats from './static/cats.gif'
import './App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Nice 2018 GraphQL - Lab</h1>
          <img alt='my-cats' src={Cats} />

          <a target='_blank' rel='noopener noreferrer' href="https://www.apollographql.com/docs/react/essentials/get-started.html">Readme: Setup as Apollo client</a>
        </header>
      </div>
    )
  }
}

export default App;
