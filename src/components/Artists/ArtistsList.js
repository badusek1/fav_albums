import React from 'react';

import Artist from './Artist';

import { ERRORS } from '../../errors/errorMessages';
import { Row } from 'react-bootstrap';

import LoadingSpinner from '../Spinner/LoadingSpinner';

function ArtistsList(props) {

    return (
            props.requestFinished ?
                props.requestOK ? 
                    props.searchedArtists.length > 0 ?
                        <Row>
                            {props.searchedArtists.map(artist => <Artist key={artist.artistId} id={artist.artistId} name={artist.artistName} />)}
                        </Row>
                    : <div className="items-center"><p>{ERRORS.EMPTY_LIST}</p></div>
                : <div className="items-center"><p>{ERRORS.REQUEST_ERROR}</p></div>
            : <div className="items-center"><LoadingSpinner /></div>
    );

}

export default ArtistsList;