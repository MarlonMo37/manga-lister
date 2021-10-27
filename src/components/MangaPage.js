import React from 'react'
import { Route } from 'react-router-dom';
import MangaList from './MangaList'
import Manga from './Manga'

const MangaPage = ({ match, mangas }) => (
    <div>
        <Route exact path={match.url} render={() => <h3>Choose a manga from the list below</h3>}/>
        <Route path={`${match.url}/:mangaId`} render={(routerProps) => <Manga {...routerProps} mangas={mangas} />}/>
        <MangaList url={match.url} mangas={mangas} />
    </div>
)

export default MangaPage