import {createStore, applyMiddleware} from "redux";
import RootReducer from './reducers/RootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()

const Store = createStore(RootReducer(history), composeWithDevTools(applyMiddleware(routerMiddleware(history), thunk)));

export default Store;
