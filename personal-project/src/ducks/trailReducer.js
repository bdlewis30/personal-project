// ACTION TYPES
const SEARCH = "SEARCH";
const ADD_TRAILS = "ADD_TO_FAV_TRAILS";
const ADD_CAMPING = "ADD_TO_FAV_CAMPING";

// ACTION CREATORS
export function search(state, action) {
    if (typeof state === 'Undefined') {
        return initialState
    }
    return state
}

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
        //case NAME: code...
        case SEARCH:
            return Object.assign({}, state, {results})
        case ADD_TRAILS:
            return Object.assign({}, state, {results})
        case ADD_CAMPING:
            return Object.assign({}, state, {results})
        default: return state;
    }
}