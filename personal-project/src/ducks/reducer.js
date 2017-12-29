import axios from 'axios';

const initialState = {
    name: result.name,
    city: result.city,
    state: result.city,
    description: result.description || '',
    map: `https://www.google.com/maps/@${initialState.latitude},${initialState.longitude},15z`,
    latitude: result.lat,
    longitude: result.lon,
    favTrails: [],
    id: result.id
}

// ACTION TYPES
// const NAME_OF_TYPE = "NAME_OF_TYPE";
// const UPDATE_SEARCH = "UPDATE_SEARCH”;


// SWITCH
export default function (state = initialState, action) {
    let { payload } = action;
    switch (action.type) {
        //case NAME: code...
        case SEARCH:
            return Object.assign({}, state, { name: payload.name, city: payload.city, state: payload.state, description: payload.description, map: `https://www.google.com/maps/@${lat},${lon},15z`, latitude: payload.lat, longitude: payload.lon, id: payload.unique_id })
        default: return state;
    }
}

// ACTION CREATORS
// export function updateSearchType( search ) {
//     return {
//       type: UPDATE_SEARCH,
//       payload: search
//     }
//   }