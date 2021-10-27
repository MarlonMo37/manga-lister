import React from 'react'
import { Route, Switch } from 'react-router-dom';
import GenreList from './GenreList'
import Genre from './Genre'

const GenrePage = ({ match, genres }) => (
    <div>
        <Route exact path={match.url} render={() => <h3>Choose a genre from the list below</h3>}/>
        <GenreList url={match.url} genres={genres} />
        <Route path={`${match.url}/:genreId`} render={(routerProps) => <Genre {...routerProps} genres={genres} />}/>
    </div>
)

export default GenrePage