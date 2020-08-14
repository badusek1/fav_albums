import React from 'react';
import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation/Navigation';

function ErrorPage(props) {

    return (
        <div>
            <Navigation level="0">
                <span>Chyba 404</span>
            </Navigation>
            <div className="items-center">
                <p>Stránka sa nenašla, prejdite na <Link to="/">obľúbené albumy</Link>.</p>
            </div>
        </div>
    );

}

export default ErrorPage;