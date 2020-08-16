import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { searchArtists, finishSearchingRequest } from '../redux/actions/artistsActions';

import axios from 'axios';
import Search from '../components/Search/Search';
import ArtistsList from '../components/Artists/ArtistsList';

function ArtistsPage(props) {

    const source = axios.CancelToken.source();

    useEffect(() => {
        finishSearchingRequest();
        return () => {
            source.cancel();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div>
            <Navigation level="2">
                <Link to="/" className="icon-button">
                    <FontAwesomeIcon icon={faAngleLeft} className="icon" />späť
                </Link>
            </Navigation>
            <Search onSearch={props.searchArtists}  placeholder="Hľadať interprétov..." value={props.searchTerm} source={source} />
            <ArtistsList requestFinished={props.requestFinished} requestOK={props.requestOK} searchedArtists={props.searchedArtists} />
        </div>
    );

}

const mapStateToProps = createSelector(
    state => state.artists.searchTerm,
    state => state.artists.searchedArtists,
    state => state.artists.requestFinished,
    state => state.artists.requestOK,
    (searchTerm, searchedArtists, requestFinished, requestOK) => ({
        searchTerm,
        searchedArtists,
        requestFinished,
        requestOK
    })
)

const mapDispatchToProps = {
    searchArtists: searchArtists,
    finishSearchingRequest: finishSearchingRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistsPage);