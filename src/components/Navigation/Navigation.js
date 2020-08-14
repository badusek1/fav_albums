import React from 'react';

import MainNavLink from './MainNavLink';

import './Navigation.scss';

function Navigation(props) {

    const navigationItems = [
        {
            text: 'Obľúbené albumy',
            link: '/'
        },
        {
            text: 'Interpréti',
            link: '/artists'
        },
        {
            text: 'Výber albumov',
            link: '/albums'
        }
    ];

    const displayNavigationItems = () => {

        let displayedNavigation = [];

        for (let i = 0; i < props.level; i++) {
            const item = navigationItems[i];
            displayedNavigation.push(
                <MainNavLink key={i} isActive={ i === (props.level - 1) } to={item.link}>
                    {item.text}
                </MainNavLink>);
        }

        return displayedNavigation;
    }

    return (
        <nav className="main-navigation">
                {props.level > 0 ?
                    <span className="mobile-navigation">
                        {navigationItems[props.level - 1].text}
                    </span>
                : ''}
            {props.level > 0 ?
                <ul>
                    {displayNavigationItems()}
                </ul>
            : ''}
            { props.children }
        </nav>
    );

}

export default Navigation;