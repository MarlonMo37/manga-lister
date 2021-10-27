import React, {Component} from "react"
// import Manga from "./Manga"
import { Link } from "react-router-dom"



class MangaList extends Component {

    listMangas = () => {
        // debugger
         return Object.keys(this.props.mangas).map((mangaID) => (
            <>
                <Link key={mangaID} to={`/mangas/${mangaID}`}>
                    <img src={this.props.mangas[mangaID].image_url} width="135" />
                </Link>
            </>
            
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