// import logo from '../logo.svg';
import '../App.css';

import React, { Component } from "react"
import { connect } from 'react-redux'
import { fetchMangas } from '../actions/mangaActions'
import { fetchGenres } from '../actions/genreActions'
import MangaList from './MangaList'

class App extends Component {

  componentDidMount() {
    this.props.fetchMangas()
    this.props.fetchGenres()
  }

  handleLoading = () => {
    if(this.props.manga_loading) {
      return <div>Loading...</div>
    } else {
      return <MangaList mangas={this.props.manga_selection} />
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            {this.handleLoading()}
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
    manga_selection: state.mangas,
    manga_loading: state.manga_loading,
    genre_selection: state.genres,
    genre_loading: state.genre_loading
  }
}

export default connect(mapStateToProps, {fetchMangas, fetchGenres})(App);
