import React, {Component} from "react"
import Manga from "./Manga"
import { Link } from "react-router-dom"

class MangaList extends Component {

    listMangas = () => {
        // debugger
        // return this.props.mangas.mangas.map( manga => <Manga name={manga.name} image={manga.image_url} />)
        Object.keys(this.props.mangas).map((mangaID)=> (
            <Link key={mangaID} to={`/mangas/${mangaID}`}>
                <Manga name={this.props.mangas[mangaID]} />
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