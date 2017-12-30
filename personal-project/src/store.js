import { createStore } from 'redux';
import reducer from './ducks/reducer';


function reducer(state) {
    return state;
}

var initialState = {
    name: result.name,
    city: resut.city,
    state: result.city,
    description: result.description || '',
    map: `https://www.google.com/maps/@${result.latitude},${result.longitude},15z`,
    latitude: result.lat,
    longitude: result.lon,
    favTrails: [],
    id: result.id
}

export default createStore(reducer, initialState);