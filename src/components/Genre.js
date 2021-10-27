import React, {Component} from "react"
import MangaList from './MangaList'
import { Route } from 'react-router-dom';
import Manga from './Manga'



class Genre extends Component {

    current_genre = () => {
        return (this.props.genres[this.props.match.params.genreId])
    }

    render() {
        return(
            <div>
                <p1>{this.current_genre().name}</p1>
                <Route path={`${this.props.match.url}/mangas/:mangaId`} render={(routerProps) => <Manga {...routerProps} mangas={this.current_genre()} />}/>
                <MangaList url={this.props.match.url} mangas={this.current_genre().mangas} />
            </div>
        )
    }
}

export default Genre