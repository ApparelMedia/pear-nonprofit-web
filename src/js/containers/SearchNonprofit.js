
import { connect } from 'react-redux'
import {newSearch, searchDone, newQuery} from '../actions'
import SearchBox from '../components/SearchBox'

const mapStateToProps = (state) => {
    return {
        query: state.query
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitEvent: (query) => {
            dispatch(newSearch(query))
            let route = API_URL + '/api/nonprofits/search?q='
            fetch(route + query)
                .then((response) => response.json())
                .then((json) => dispatch(searchDone(json.data)))
                .catch((e) => {console.error(e)})
        },
        onInputChange: (text, input) => {
            dispatch(newQuery(text))
        }
    }
}

const SearchNonprofit = connect(mapStateToProps, mapDispatchToProps)(SearchBox)

export default SearchNonprofit
