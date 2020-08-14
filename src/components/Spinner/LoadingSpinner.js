import React from 'react';

import { Spinner } from 'react-bootstrap';

import './LoadingSpinner.scss';

function LoadingSpinner() {

    return (
        <Spinner animation="border" variant="light" className="loading-spinner">
            <span className="sr-only">Načítanie dát...</span>
        </Spinner>
    )

}

export default LoadingSpinner;