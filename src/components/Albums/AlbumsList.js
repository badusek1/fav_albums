import React from 'react';

import { Container, Row } from 'react-bootstrap';
import Album from './Album';
import LoadingSpinner from '../Spinner/LoadingSpinner';

import { ERRORS } from '../../errors/errorMessages';

export const FAVOURITE_ALBUMS = 'favALB';
export const ARTIST_ALBUMS = 'aALB';

function AlbumsList(props) {

    const displayArtistAlbums = () => {

        return (
            props.albums.map((album) => 
                <Album 
                    key={album.collectionId}
                    id={album.collectionId}
                    name={album.collectionName}
                    year={new Date(album.releaseDate).getFullYear()}
                    favouriteAlbums={props.favouriteAlbums}
                    addFavouriteAlbum={props.addFavouriteAlbum}
                />
            )
        )

    }

    const displayFavouriteAlbums = () => {

        return (
            props.albums.map(album => 
                <Album
                    key={album.collectionId}
                    id={album.collectionId}
                    name={album.collectionName}
                    artist={album.artistName}
                />
            )
        )

    }


    const displayTitle = () => {
        return props.title ? <h1 className="mb-4">{props.title}</h1> : '';
    }

    const displayAlbums = () => {

        return (
            props.albums.length > 0 ?
                <div>
                    {displayTitle()}
                    <Container>
                        <Row>
                            {
                                props.type === ARTIST_ALBUMS ?
                                    displayArtistAlbums()
                                :
                                    displayFavouriteAlbums()
                            }
                        </Row>
                    </Container>
                </div>
            :   <div className="items-center-wrap">
                    {displayTitle()}
                    <div className="items-center">
                        <p>{ERRORS.EMPTY_LIST}</p>
                    </div>
                </div>
        )

    }

    return (
        props.requestFinished ?
            props.requestOK ?
                displayAlbums()
            : <div className="items-center"><p>{ERRORS.REQUEST_ERROR}</p></div>
        : <div className="items-center"><LoadingSpinner /></div>
    )

}

export default AlbumsList;