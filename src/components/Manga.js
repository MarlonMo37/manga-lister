import React, {Component} from "react"

class Manga extends Component {

    render() {
        debugger
        return(
            <div>
                <img src={this.props.image} />
                <h3>{this.props.mangas[this.props.match.params.mangaId].name}</h3>
            </div>
        )
    }
}

export default Manga