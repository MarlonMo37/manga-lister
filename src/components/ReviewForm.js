import React, {Component} from "react"
import { createReview } from '../actions/reviewActions'
import { patchReview } from '../actions/reviewActions'
import { connect } from 'react-redux'


class ReviewForm extends Component {

    constructor(props) {
        super(props)
            
        this.state = {
            reviewText: "",
            manga: this.props.manga
        }

        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        if(this.props.manga.reviews[0])
         this.setState({
             reviewText: this.props.manga.reviews[0].written_review
         })
    }

    handleChange(e) {
        this.setState({
            reviewText: e.target.value
        })
    }

    showReview = () => {
        if (this.props.manga.reviews[0]) {
            return <h5>{this.props.manga.reviews[0].written_review}</h5>
        }
    }

    renderButton = () => {
        if (this.showReview()) {
            return(
                 <div>
                    {this.showReview()}
                    <form onSubmit={(e) => this.props.patchReview(e, this.state)}>
                        <input type="textarea" value={this.state.reviewText} onChange={this.handleChange}/>
                        <input type="submit" value="Edit Review"/>
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    {this.showReview()}
                    <form onSubmit={(e) => this.props.createReview(e, this.state)}>
                            <input type="textarea" value={this.state.reviewText} onChange={this.handleChange}/>
                            <input type="submit" value="Submit Review"/>
                    </form>
                </div>
            )
        }
    }

    render() {
        return(
            <>
                {this.renderButton()}
            </>
        )
    }
}

export default connect(null, { createReview, patchReview })(ReviewForm)