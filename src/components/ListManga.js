import React, {Component} from "react"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from "react-router-dom"
import { Route } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import { patchManga } from '../actions/listActions'
import { connect } from 'react-redux'

class ListManga extends Component {

    renderButton = (manga) => {
        return(
            <Link key={this.props.manga.id} to={`/your_list/${this.props.manga.id}`}>
                <button>Write Review</button>
            </Link>)
    }

    render() {
        return(
            <div >
                <Row>
                    <Col><img src={this.props.manga.image_url} width="300"/><h2>{this.props.manga.name}</h2></Col>
                    <Col>
                        <Row>
                            <Col><h4>Score:{this.props.manga.score}</h4></Col>
                            <Col><h4>Date Start: {this.props.manga.date_start}</h4></Col>
                            <Col><h4>Date End: {this.props.manga.date_end}</h4></Col>
                        </Row>
                        <h5>{this.props.manga.synopsis}</h5>

                        <button onClick={() => this.props.patchManga(this.props.manga)}>Remove Manga</button>
                        {this.renderButton(this.props.manga)}


                        
                        
                        <Route path={`/your_list/${this.props.manga.id}`} render={(routerProps) => <ReviewForm {...routerProps} manga={this.props.manga} />}/>
                        <Route path={`/your_list/${this.props.manga.id}/edit`} render={(routerProps) => <ReviewForm {...routerProps} manga={this.props.manga} />}/>
                        
                        
                    </Col>
                </Row><br></br><br></br>
            </div>
        )
    }

}

export default connect(null, { patchManga })(ListManga)