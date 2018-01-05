import { createStore } from 'redux';
import reducer from './ducks/reducer';

let store = createStore(reducer);

export const initialState = {
    search: {
        searchState: 'OR',
        searchCity: 'Portland',
        radius: 25
    },
    results: {
        searchResults: [],
        name: initialState.result.name,
        city: initialState.result.city,
        state: initialState.result.city,
        description: initialState.result.description || '',
        map: `https://www.google.com/maps/@${initialState.results.latitude},${initialState.results.longitude},15z`,
        latitude: initialState.result.lat,
        longitude: initialState.result.lon,
        id: initialState.result.id
    }
}

export default store;