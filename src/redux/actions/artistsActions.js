
import appleAxios from '../../axios/appleAxios';

export const UPDATE_SEARCH_RESULTS = 'artists:UPDATE_SEARCH_RESULTS';
export const HANDLE_SEARCH_ERROR = 'artists:HANDLE_SEARCH_ERROR';
export const START_REQUEST = 'artists:START_REQUEST';
export const FINISH_REQUEST = 'artists:FINISH_REQUEST';
export const CLEAR_SEARCHED_ARTISTS = 'artists:CLEAR_SEARCHED_ARTISTS';

export function searchArtists(searchTerm) {

    searchTerm = searchTerm.trim();

    return dispatch => {

        dispatch(startSearchingRequest());

        if (searchTerm === '') {
            dispatch(updateSearchedArtists(searchTerm, []));
            dispatch(finishSearchingRequest());
        } else {

            appleAxios.get('/search', {
                params: {
                    term: searchTerm,
                    entity: 'musicArtist'
                }
            })
            .then((response) => {
                dispatch(updateSearchedArtists(searchTerm, response.data.results));
            })
            .catch(() => {
                dispatch(handleSearchError(searchTerm));
            })
            .then(() => {
                dispatch(finishSearchingRequest());
            });

        }

    }

}

export function updateSearchedArtists(searchTerm, results) {

    return {
        type: UPDATE_SEARCH_RESULTS,
        payload: {
            searchTerm: searchTerm,
            results: results
        }
    }

}

export function handleSearchError(searchTerm) {

    return {
        type: HANDLE_SEARCH_ERROR,
        payload: {
            searchTerm: searchTerm
        }
    }

}

export function startSearchingRequest() {
    
    return {
        type: START_REQUEST
    }

}

export function finishSearchingRequest() {

    return {
        type: FINISH_REQUEST
    }

}

export function clearSearchedArtists() {

    return {
        type: CLEAR_SEARCHED_ARTISTS,
    }

}