import React, {Component} from "react"
import MangaList from './MangaList'

const ListPage = ({ match, list }) => {
    <div>
        <MangaList url={match.url} mangas={list} />
    </div>
}

export default ListPage