import { createStore, combineReducers } from 'redux';
import reducer from './ducks/reducer';
import trailReducer from './ducks/trailReducer';

let store = createStore(combineReducers({
    trailReducer
}));

export const initialState = {
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
    }
}

export default store;