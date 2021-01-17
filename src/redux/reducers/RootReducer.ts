import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

// REDUCERS
import autoReducer from './AutoReducer';

const RootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    auto: autoReducer
});

export default RootReducer;
