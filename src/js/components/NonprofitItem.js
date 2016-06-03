import React, {Component} from 'react';

import css from 'style!css!../../styles/item.css'

class NonprofitItem extends Component {
    render () {
        let {ein, name, city, state, deductibility_status_code} = this.props;
        return (
           <li className={css.className}>
               Ein: {ein}   <br />
               Name: {name} <br />
               City: {city} <br />
               State: {state} <br />
               Status: {deductibility_status_code[0] || '(none)'}
           </li>
        )
    }
}

export default NonprofitItem
