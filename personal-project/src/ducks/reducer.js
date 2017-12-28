import axios from 'axios';

const initialState = {
    name: t.name,
    city: t.city,
    state: t.state,
    description: t.description,
    map: `https://www.google.com/maps/@${t.lat},${t.lon},15z`,
    latitude: t.lat,
    longitude: t.lon,
    id: t.unique_id
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
            return Object.assign({}, state, {name: payload.name, city: payload.city, state: payload.state, description: payload.description, map: `https://www.google.com/maps/@${t.lat},${t.lon},15z`, latitude: payload.lat, longitude: payload.lon, id: payload.unique_id})
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