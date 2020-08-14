import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { Col } from 'react-bootstrap';

import './Album.scss';
import albumImg from '../../assets/images/album.png';


function Album(props) {

    return (
        <Col xs={12} className="album">
            <img src={albumImg} alt="Obrázok albumu" className="icon-image" />
            <div className="album-info">
                <p className="album-name">{props.name}</p>
                {props.year && <p className="additional-info">{props.year}</p>}
                {props.artist && <p className="additional-info">{props.artist}</p>}
            </div>
            {
                (props.addFavouriteAlbum && (props.favouriteAlbums.indexOf(props.id) < 0)) ?
                    <button onClick={() => {props.addFavouriteAlbum(props.id)}} className="icon-button"><FontAwesomeIcon icon={faThumbsUp} /></button>
                : ''
            }
        </Col>
    )

}

export default Album;