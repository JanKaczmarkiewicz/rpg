import { createStore } from 'redux';
import reducer from './map/reducer';

const store = createStore(reducer);

export default store;
