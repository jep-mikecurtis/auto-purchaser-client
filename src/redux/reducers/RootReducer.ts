import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';

// REDUCERS
import authReducer from './AuthReducer';
import autoReducer from './AutoReducer';

const RootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    auto: autoReducer
});

export default RootReducer;
