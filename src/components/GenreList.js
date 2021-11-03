import React, {Component} from "react"
import { Link } from "react-router-dom"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

class GenreList extends Component {
    
    listGenres = () => {
        return Object.keys(this.props.genres).map((genreID) => (
            <Col>
                <Link key={genreID} to={`/genres/${genreID}`} style={{color: 'black', textDecoration: 'none'}}>
                    {this.props.genres[genreID].name}
                </Link>
            </Col>
        ))
    }

    render() {
        return (
            <Row>
                {this.listGenres()}
            </Row>
        )
    }
}

export default GenreList