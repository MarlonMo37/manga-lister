// import logo from '../logo.svg';
import '../App.css';

import React, { Component } from "react"
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { fetchMangas } from '../actions/mangaActions'
import { fetchGenres } from '../actions/genreActions'
import MangaPage from './MangaPage'
import GenrePage from './GenrePage'
import ListPage from './ListPage'
import Home from "./Home"
import Navbar from "./Navbar"

class App extends Component {

  componentDidMount() {
    this.props.fetchMangas()
    this.props.fetchGenres()
  }

  listedMangas = () => {
    return this.props.manga_selection.filter(manga => manga.listed === true)
  }


  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mangas" render={routerProps => <MangaPage {...routerProps} mangas={this.props.manga_selection}/>} />
            <Route path="/genres" render={routerProps => <GenrePage {...routerProps} genres={this.props.genre_selection}/>} />
            <Route path="/your_list" render={routerProps => <ListPage {...routerProps} list={this.listedMangas()}/>} />
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
