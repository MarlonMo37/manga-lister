import React, {Component} from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { patchManga } from '../actions/listActions'
import { connect } from 'react-redux'

class Manga extends Component {

    current_manga = () => {
        if (this.props.mangas.mangas) {
            return (this.props.mangas.mangas[this.props.match.params.mangaId])
        } else {
            return (this.props.mangas[this.props.match.params.mangaId])
        }
    }

    list_button = () => {
        if (this.current_manga().listed === false) {
            return <button className="add=btn" onClick={() => this.props.patchManga(this.current_manga())}>Add To Your List</button>
        } else {
            return <button className="add=btn" onClick={() => this.props.patchManga(this.current_manga())}>Remove From Your List</button>
        }
    }

    url_button = () => {
        // debugger
        if (this.props.match.url.includes("genres") === false) {
            return this.list_button()
        }
    }

    render() {
        return(
            <div >
                    <Row>
                        <Col><img src={this.current_manga().image_url} width="300"/><h2>{this.current_manga().name}</h2></Col>
                        <Col>
                            <Row>
                                <Col><h4>Score:{this.current_manga().score}</h4></Col>
                                <Col><h4>Date Start: {this.current_manga().date_start}</h4></Col>
                                <Col><h4>Date Start: {this.current_manga().date_end}</h4></Col>
                            </Row>
                            <h5>{this.current_manga().synopsis}</h5>
                            {this.url_button()}
                        </Col>
                    </Row>
            </div>
        )
    }
}

export default connect(null, { patchManga })(Manga)