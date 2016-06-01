import React, {Component} from 'react';
import NonprofitItem from './NonprofitItem'

class NonprofitCount extends Component {
    render () {
        let count = this.props.nonprofits.length;
        if (count < 100) {
            return (
                <p>{count} orgs found </p>
            )
        }
        return (
            <p> {count} orgs found (but possibly more, please be more specific)</p>
        )
    }
}

export default NonprofitCount
