import React, {Component} from "react"
import Genre from "./Genre"

class GenreList extends Component {
    
    listGenres = () => {
        return this.props.genres.map( manga => <Genre name={manga.name} />)
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