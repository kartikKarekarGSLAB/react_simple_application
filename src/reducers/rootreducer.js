import calculationsReducer from './calculations';
import personReducer from './persons';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    cacl : calculationsReducer,
    person : personReducer
});

export default rootReducer;