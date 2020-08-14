import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import HomePage from './pages/HomePage';
import AlbumsPage from './pages/AlbumsPage';
import ArtistsPage from './pages/ArtistsPage';
import ErrorPage from './pages/ErrorPage';

function App() {
    return (
        <div className="App">
            <div className="parallax-background">
            </div>
            <BrowserRouter>
                <Container className="content-container">
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <HomePage />
                            </Route>
                            <Route path="/artists">
                                <ArtistsPage />
                            </Route>
                            <Route path="/albums/:artistID">
                                <AlbumsPage />
                            </Route>
                            <Route path="*">
                                <ErrorPage />
                            </Route>
                        </Switch>
                    </div>
                </Container>
            </BrowserRouter>
        </div>
    );
}

export default App;
