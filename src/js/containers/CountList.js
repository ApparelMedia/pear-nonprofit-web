import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import NonprofitCount from '../components/NonprofitCount'

const mapStateToProps = (state) => {
    return {
        nonprofits: state.nonprofits
    }
}

export default connect(mapStateToProps)(NonprofitCount)
