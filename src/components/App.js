// import logo from '../logo.svg';
import '../App.css';

import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMangas } from '../actions/mangaActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchMangas()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    mangas: state.mangas,
    loading: state.loading
  }
}

export default connect(mapStateToProps, {fetchMangas})(App);
