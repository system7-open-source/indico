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

import * as actions from '../actions';


const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SET_FAVORITE_ROOMS:
            return {...state, favoriteRooms: Object.assign({}, ...action.rooms.map((id) => ({[id]: true})))};
        case actions.SET_USER_INFO:
            return {...state, hasOwnedRooms: action.data.has_owned_rooms};
        case actions.ADD_FAVORITE_ROOM:
            return {...state, favoriteRooms: {...state.favoriteRooms, [action.id]: true}};
        case actions.DEL_FAVORITE_ROOM:
            return {...state, favoriteRooms: {...state.favoriteRooms, [action.id]: false}};
        default:
            return state;
    }
}
