import React, {Component} from "react"
import Manga from "./Manga"

class MangaList extends Component {
    
    listMangas = () => {
        return this.props.mangas.mangas.map( manga => <Manga name={manga.name} image={manga.image_url} />)
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