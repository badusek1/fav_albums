
export const ADD_FAVOURITE_ALBUM = 'albums:ADD_FAVOURITE_ALBUM';

export function addFavouriteAlbum(albumID) {

    return {
        type: ADD_FAVOURITE_ALBUM,
        payload: {
            albumID: albumID
        }
    }

}