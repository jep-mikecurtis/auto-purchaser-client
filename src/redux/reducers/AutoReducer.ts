import {AutoType, AUTO_CREATE} from '../actions/auto/AutoTypes';

const DefaultState: AutoType[] = [];

type ActionType = {
    type:  string,
    payload: AutoType
}

const autoReducer = (state: AutoType[] = DefaultState, action: ActionType) => {
    switch(action.type) {
        case AUTO_CREATE:
            return [...state, action.payload]
        default: 
            return state;
    }
}

export default autoReducer;