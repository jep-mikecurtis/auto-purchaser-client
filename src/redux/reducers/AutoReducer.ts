import {AutoType, AUTO_CREATE, AUTO_GET} from '../actions/auto/AutoTypes';

let DefaultState: AutoType[] = [];

type ActionType = {
    type:  string,
    payload: AutoType
}

//Check If Auto Was Saved To Local Storage
// And Set Default State
const autos: AutoType[] = JSON.parse(localStorage.getItem('autos') || "{}");
if (localStorage.getItem('autos')) {
    DefaultState = autos
}

const autoReducer = (state: AutoType[] = DefaultState, action: ActionType) => {
    switch(action.type) {
        case AUTO_CREATE:
            return [...state, action.payload]
        case AUTO_GET:
            return action.payload
        default: 
            return state;
    }
}

export default autoReducer;