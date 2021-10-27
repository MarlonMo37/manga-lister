import React, {Component} from "react"
import { Link } from "react-router-dom"
import Genre from "./Genre"

class GenreList extends Component {
    
    listGenres = () => {
        return Object.keys(this.props.genres).map((genreID) => (
            <>
                <Link key={genreID} to={`/genres/${genreID}`}>
                    <h1>{this.props.genres[genreID].name}</h1>
                </Link>
            </>
        ))
    }

    render() {
        return (
            <div>
                {this.listGenres()}
            </div>
        )
    }
}

export default GenreList