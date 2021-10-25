import React, {Component} from "react"

class Manga extends Component {

    render() {
        return(
            <div>
                <img src={this.props.image} />
                <p1>{this.props.name}</p1>
            </div>
        )
    }
}

export default Manga