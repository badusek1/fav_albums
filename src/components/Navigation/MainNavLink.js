import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';


function MainNavLink(props) {

    if (props.isActive) {

        return (
            <li>
                {props.children}
            </li>
        );

    } else {

        return (
            <li>
                <Link to={props.to}>{props.children}</Link>
                <span className="nav-decorator"><FontAwesomeIcon icon={faAngleDoubleRight} /></span>
            </li>
        );

    }

}

export default MainNavLink;