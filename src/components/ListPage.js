import React, {Component} from "react"
import Manga from './Manga'
import ListManga from './ListManga'
import { Route } from 'react-router-dom'


class ListPage extends Component {

    showMangas = () => {
        return this.props.list.map(manga => <ListManga manga={manga} />)
    }

    render() {
        return(
            <div>
                {this.showMangas()}
            </div>
        )
    }
    
}

export default ListPage