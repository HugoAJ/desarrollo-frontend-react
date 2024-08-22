import { combineReducers } from 'redux';

// aca importamos todos los reducers
import defaultReducer from "./default/defaultReducers.js";
import productsReducer from './products/productsReducers.js';
import formReducer from './form/FormReducers.js';

const rootReducer = combineReducers({
    default: defaultReducer,
    products:productsReducer,
    form: formReducer,

});

export default rootReducer;