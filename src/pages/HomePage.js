import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { Link } from 'react-router-dom';

import appleAxios from '../axios/appleAxios';

import Navigation from '../components/Navigation/Navigation';
import AlbumsList, { FAVOURITE_ALBUMS } from '../components/Albums/AlbumsList';

import { clearSearchedArtists } from '../redux/actions/artistsActions';


function HomePage(props) {

    const [favouriteAlbums, setFavouriteAlbums] = useState([]);
    const [requestFinished, setRequestFinished] = useState(false);
    const [requestOK, setRequestOK] = useState(true);

    const fetchFavouriteAlbums = (favouriteAlbums) => {

        const albumIDs = favouriteAlbums.join(',');

        if (albumIDs !== '') {
            
            appleAxios.get('/lookup', {
                params: {
                    id: albumIDs
                }
            })
            .then((response) => {

                setFavouriteAlbums(response.data.results);
                setRequestOK(true);

            })
            .catch((error) => {

                setRequestOK(false);

            })
            .then(() => {
                setRequestFinished(true);
            });

        } else {
            setRequestFinished(true);
            setRequestOK(true);
        }

    }

    const { clearSearchedArtists } = props;

    useEffect(() => {
        clearSearchedArtists();
        fetchFavouriteAlbums(props.favouriteAlbums)
    }, [props.favouriteAlbums, clearSearchedArtists]);


    return (
        <div>
            <Navigation level="1">
                <Link to="/artists">+ pridať</Link>
            </Navigation>
            <AlbumsList
                type={FAVOURITE_ALBUMS}
                requestFinished={requestFinished}
                requestOK={requestOK}
                albums={favouriteAlbums}
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
    clearSearchedArtists: clearSearchedArtists
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);