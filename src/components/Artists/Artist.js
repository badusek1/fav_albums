import React from 'react';

import { Link } from 'react-router-dom';

import artistImage from '../../assets/images/artist.png';
import './Artist.scss';

import { Col } from 'react-bootstrap';

function Artist(props) {
    return (
        <Col md={3}>
            <Link to={`/albums/${props.id}`} className="artist">
                <img src={artistImage} alt="Ikona interpréta" className="icon-image" />
                <p>{props.name}</p>
            </Link>
        </Col>
    )

}

export default Artist;