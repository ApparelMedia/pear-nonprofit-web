import React, {Component} from 'react';
import SearchNonprofit from '../containers/SearchNonprofit'
import VisibleList from '../containers/VisibleList'
import CountList from '../containers/CountList'

class App extends Component {
    render () {
        return (
            <div>
                <SearchNonprofit />
                <h1> Organizations </h1>
                <CountList />
                <VisibleList />
            </div>
        )
    }
}

export default App
