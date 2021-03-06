/* This file is part of Indico.
 * Copyright (C) 2002 - 2018 European Organization for Nuclear Research (CERN).
 *
 * Indico is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * Indico is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Indico; if not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';
import {Icon, Popup} from 'semantic-ui-react';

import {Translate} from 'indico/react/i18n';

import './Menu.module.scss';


function MenuItem({path, children, disabled}) {
    if (disabled) {
        return (
            <Route path={path}>
                <Popup trigger={<li styleName="rb-menu-item"><span styleName="disabled">{children}</span></li>}
                       content={Translate.string('Coming soon!')}
                       position="bottom center" />
            </Route>
        );
    }
    return (
        <Route path={path}>
            {({match}) => (
                <li className={match ? 'selected' : ''}
                    styleName="rb-menu-item">
                    <Link to={path} replace={!!match}>
                        {children}
                    </Link>
                </li>
            )}
        </Route>
    );
}

MenuItem.propTypes = {
    path: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool
};

MenuItem.defaultProps = {
    disabled: false,
};

export default function Menu() {
    return (
        <ul styleName="rb-menu">
            <MenuItem key="book" path="/book">
                <Icon name="add square" />
                <Translate>Book a Room</Translate>
            </MenuItem>
            <MenuItem key="rooms" path="/rooms">
                <Icon name="list" />
                <Translate>List of Rooms</Translate>
            </MenuItem>
            <MenuItem key="calendar" path="/calendar" disabled>
                <Icon name="calendar" />
                <Translate>Calendar</Translate>
            </MenuItem>
            <MenuItem key="blockings" path="/blockings" disabled>
                <Icon name="window close" />
                <Translate>Blockings</Translate>
            </MenuItem>
        </ul>
    );
}
