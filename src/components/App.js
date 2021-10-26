// import logo from '../logo.svg';
import '../App.css';

import React, { Component } from "react"
import { connect } from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { fetchMangas } from '../actions/mangaActions'
import { fetchGenres } from '../actions/genreActions'
import MangaList from './MangaList'
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
            <Route path="/mangas" render={routerProps => <MangaList {...routerProps} mangas={this.props.manga_selection}/>} />
          </Switch>
        </Router>
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
