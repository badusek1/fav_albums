
import { ADD_FAVOURITE_ALBUM } from '../actions/albumsActions';

export function albumsReducer(
    state = { 
        favouriteAlbums: []
    },
    action
) {

    switch (action.type) {
        case ADD_FAVOURITE_ALBUM:
            return {
                favouriteAlbums: [...state.favouriteAlbums, action.payload.albumID]
            }
        default:
            return state;
    }

}