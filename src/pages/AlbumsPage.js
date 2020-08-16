import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Navigation from '../components/Navigation/Navigation';
import AlbumsList, { ARTIST_ALBUMS } from '../components/Albums/AlbumsList';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import appleAxios from '../axios/appleAxios';
import axios from 'axios';

import { addFavouriteAlbum } from '../redux/actions/albumsActions';

function AlbumsPage(props) {

    const { artistID } = useParams();
    const [albumsData, setAlbumsData] = useState({
        artistName: '',
        albums: []
    });
    const [requestFinished, setRequestFinished] = useState(false);
    const [requestOK, setRequestOK] = useState(true);


    const loadAlbumsData = (source, artistID) => {

        let requestCancelled = false;

        appleAxios.get('/lookup', {
            params: {
                id: artistID,
                entity: 'album'
            },
            cancelToken: source.token
        })
        .then((response) => {

            const results = response.data.results;

            setAlbumsData({
                artistName: results[0] ? results[0].artistName : 'Neznámy interprét',
                albums: results.slice(1)
            });
            setRequestOK(true);

        })
        .catch((error) => {
            if (axios.isCancel(error)) {
                requestCancelled = true;
            } else {
                setRequestOK(false);
            }
        })
        .then(() => {
            if (!requestCancelled) {
                setRequestFinished(true);
            }
        });

    }


    useEffect(() => {

        const source = axios.CancelToken.source();

        loadAlbumsData(source, artistID);

        return () => {
            source.cancel();
        }

    }, [artistID]);


    return (
        <div>
            <Navigation level="3">
                <Link to="/artists" className="icon-button">
                    <FontAwesomeIcon icon={faAngleLeft} className="icon" />späť
                </Link>
            </Navigation>
            <AlbumsList
                type={ARTIST_ALBUMS}
                title={albumsData.artistName}
                requestFinished={requestFinished}
                requestOK={requestOK}
                albums={albumsData.albums}
                favouriteAlbums={props.favouriteAlbums}
                addFavouriteAlbum={props.addFavouriteAlbum}
            />
        </div>
    );

}

const mapStateToProps = createSelector(
    state => state.albums.favouriteAlbums,
    favouriteAlbums => ({
        favouriteAlbums
    })
);

const mapDispatchToProps = {
    addFavouriteAlbum: addFavouriteAlbum
}

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsPage);