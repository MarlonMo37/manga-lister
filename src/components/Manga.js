import React, {Component} from "react"

class Manga extends Component {

    render() {
        return(
            <div>
                {/* <img src={this.props.image} /> */}
                <h3>{this.props.mangas[this.props.match.params.mangaId].synopsis}</h3>
            </div>
        )
    }
}

export default Manga