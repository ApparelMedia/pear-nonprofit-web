import React, {Component} from 'react';

import css from '../../styles/card.scss'

class NonprofitItem extends Component {
    render () {
        console.log(css)
        let {ein, name, city, state, deductibility_status_code} = this.props;
        console.log(this.props);
        return (
           <li className={css.card}><a target="blank" href={"http://www.charitynavigator.org/index.cfm?bay=search.profile&ein=" + ein}>
               Ein: {ein}   <br />
               Name: {name} <br />
               City: {city} <br />
               State: {state} <br />
               Status: <ul>{deductibility_status_code.map((status) => {
                            return <li>{status}</li>
                        })}</ul>
               <p className={css.instruction}>click for info</p>
               </a>
           </li>
        )
    }
}

export default NonprofitItem
