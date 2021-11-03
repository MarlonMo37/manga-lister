import React, {Component} from "react"
import { NavLink } from "react-router-dom"
import Navibar from 'react-bootstrap/Navbar'
import { Container } from "react-bootstrap"

class Navbar extends Component {
    render() {
        return (
            <Navibar bg="dark" variant="light">
                <Container>
                    <NavLink to="/" style={{color: 'white', textDecoration: 'none'}}>Home</NavLink>
                    <NavLink to="/mangas" style={{color: 'white', textDecoration: 'none'}}>Mangas</NavLink>
                    <NavLink to="/genres" style={{color: 'white', textDecoration: 'none'}}>Genres</NavLink>
                    <NavLink to="/your_list" style={{color: 'white', textDecoration: 'none'}}>Your List</NavLink>
                </Container>
            </Navibar>
        )
    }
}

export default Navbar