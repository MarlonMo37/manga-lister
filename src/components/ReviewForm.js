import React, {Component} from "react"


class ReviewForm extends Component {

    render() {
        return(
            <form>
                <input type="textarea"/>
                <input type="submit" value="Submit Review"/>
            </form>
        )
    }
}

export default ReviewForm