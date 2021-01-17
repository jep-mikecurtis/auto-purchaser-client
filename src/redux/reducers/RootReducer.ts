import {combineReducers} from 'redux';

// REDUCERS
import autoReducer from './AutoReducer';

const RootReducer = (history: any) => combineReducers({
    auto: autoReducer
});

export default RootReducer;
