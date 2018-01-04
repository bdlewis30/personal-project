// ACTION TYPES
const SEARCH = "SEARCH";
const ADD_TO_FAV_TRAILS = "ADD_TO_FAV_TRAILS";
const ADD_TO_FAV_CAMPING = "ADD_TO_FAV_CAMPING";

// INITIAL STATE
const initialState = {
    search: {
        searchState: 'OR',
        searchCity: 'Portland',
        radius: 25
    },
    results: {
        searchResults: [],
        name: result.name,
        city: result.city,
        state: result.city,
        description: result.description || '',
        map: `https://www.google.com/maps/@${initialState.results.latitude},${initialState.results.longitude},15z`,
        latitude: result.lat,
        longitude: result.lon,
        id: result.id
    },
    favorites: {
        favTrails: results,
        favCamping: results
    }
}

// ACTION CREATORS
export function search(state, action) {
    if (typeof state === 'Undefined') {
        return initialState
    }
    return state
}

export function addToFavTrails() {
    return {
        type: ADD_TO_FAV_TRAIL,
        payload: initialState.favorites.favTrails
    }
}

export function addToFavCamping() {
    return {
        type: ADD_TO_FAV_CAMPING,
        payload: initialState.favorites.favCamping
    }
}

// SWITCH
export default function (state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        //case NAME: code...
        case SEARCH:
            return Object.assign({}, state, {results})
        case ADD_TO_FAV_TRAILS:
            return Object.assign({}, state, {results})
        case ADD_TO_FAV_CAMPING:
            return Object.assign({}, state, {results})
        default: return state;
    }
}