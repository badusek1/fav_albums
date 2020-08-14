
import { 
    UPDATE_SEARCH_RESULTS,
    HANDLE_SEARCH_ERROR,
    CLEAR_SEARCHED_ARTISTS,
    START_REQUEST,
    FINISH_REQUEST
} from '../actions/artistsActions';

export function artistsReducer(
    state = {
        searchTerm: '',
        searchedArtists: [],
        requestFinished: true,
        requestOK: true
    },
    action
) {

    switch (action.type) {
        case UPDATE_SEARCH_RESULTS:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                searchedArtists: action.payload.results.map((artist) => ({
                    artistId: artist.artistId,
                    artistName: artist.artistName
                })),
                requestOK: true
            };
        case HANDLE_SEARCH_ERROR:
            return {
                ...state,
                searchTerm: action.payload.searchTerm,
                searchedArtists: [],
                requestOK: false
            }
        case START_REQUEST:
            return  {
                ...state,
                requestFinished: false
            }
        case FINISH_REQUEST:
            return {
                ...state,
                requestFinished: true
            }
        case CLEAR_SEARCHED_ARTISTS:
            return {
                ...state,
                searchTerm: '',
                searchedArtists: [],
                requestFinished: true,
                requestOK: true
            }
        default:
            return state;
    }

}