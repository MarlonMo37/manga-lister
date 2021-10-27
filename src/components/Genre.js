import React, {Component} from "react"


class Genre extends Component {

    render() {
        return(
            <div>
                <p1>{this.props.genres[this.props.match.params.genreId].name}</p1>
            </div>
        )
    }
}

export default Genre