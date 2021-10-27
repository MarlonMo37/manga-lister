import React, {Component} from "react"
// import Manga from "./Manga"
import { Link } from "react-router-dom"

class MangaList extends Component {

    listMangas = () => {
         return Object.keys(this.props.mangas).map((mangaID) => (
            <Link key={mangaID} to={`/mangas/${mangaID}`}>
                <img src={this.props.mangas[mangaID].image_url} />
                <h3>{this.props.mangas[mangaID].name}</h3>
            </Link>
        ))
    }

    render() {
        return (
            <div>
                {this.listMangas()}
            </div>
        )
    }
}

export default MangaList