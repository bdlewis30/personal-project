import store from '../store';

// ACTION TYPES
const SEARCH = "SEARCH";
const ADD_TRAILS = "ADD_TO_FAV_TRAILS";

// ACTION CREATORS

export function addToFavTrails() {
    return {
        type: ADD_TRAILS,
        payload: initialState.favorites.favTrails
    }
}

// SWITCH
export default function (state = initialState, action) {
    let { payload } = action;
    let results = state.results;
    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {results})
        default: return state;
    }
}