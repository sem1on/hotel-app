import { createStore } from 'redux';
import { hotelsReducer } from './redusers/hotelReduser';

const store = createStore(
    hotelsReducer,
);

export default store;