import React, {Component} from "react"
import { Link } from "react-router-dom"



class MangaList extends Component {

    listMangas = () => {
        let url = ""

        if (this.props.url.includes("/genres")) {
            url = `${this.props.url}/mangas/`
        } else {
            url = `/mangas/`
        }

        return Object.keys(this.props.mangas).map((mangaID) => (
            <>
                <Link key={mangaID} to={`${url + mangaID}`}>
                    <img src={this.props.mangas[mangaID].image_url} width="130" />
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