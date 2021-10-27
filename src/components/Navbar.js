import React, {Component} from "react"
import { NavLink } from "react-router-dom"

class Navbar extends Component {


    render() {
        return (
            <div>
                <NavLink to="/" >Home</NavLink>
                <NavLink to="/mangas">Mangas</NavLink>
                <NavLink to="/genres">Genres</NavLink>
            </div>
        )
    }
}

export default Navbar