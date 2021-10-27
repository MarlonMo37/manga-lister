// import logo from '../logo.svg';
import '../App.css';

import React, { Component } from "react"
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { fetchMangas } from '../actions/mangaActions'
import { fetchGenres } from '../actions/genreActions'
import MangaPage from './MangaPage'
// import MangaList from './MangaList'
import GenreList from './GenreList'
import Home from "./Home"
import Navbar from "./Navbar"

class App extends Component {

  componentDidMount() {
    this.props.fetchMangas()
    this.props.fetchGenres()
  }

  // handleLoading = () => {
  //   if(this.props.manga_loading) {
  //     return <div>Loading...</div>
  //   } else {
  //     return <MangaList mangas={this.props.manga_selection} />
  //   }
  // }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mangas" render={routerProps => <MangaPage {...routerProps} mangas={this.props.manga_selection}/>} />
            <Route path="/genres" render={routerProps => <GenreList {...routerProps} genres={this.props.genre_selection}/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    manga_selection: state.mangas.mangas,
    manga_loading: state.mangas.manga_loading,
    genre_selection: state.genres.genres,
    genre_loading: state.genres.genre_loading
  }
}

export default connect(mapStateToProps, {fetchMangas, fetchGenres})(App);
