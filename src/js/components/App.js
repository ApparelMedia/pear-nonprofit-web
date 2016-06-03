import React, {Component} from 'react';
import SearchNonprofit from '../containers/SearchNonprofit'
import VisibleList from '../containers/VisibleList'
import CountList from '../containers/CountList'

class App extends Component {
    render () {
        let title = 'Orgs'
        return (
            <div>
                <SearchNonprofit />
                <h1> {title} </h1>
                <CountList />
                <VisibleList />
            </div>
        )
    }
}

export default App
