import {AUTH_REGISTER, AUTH_REGISTER_FAIL, RegisterResponseType} from '../actions/auth/AuthTypes'

type DefaultStateType = {
    success: boolean
    user: {
        name?: string,
        email?: string,
        api_token?: string
    }
    errors?: []
}
const DefaultState: DefaultStateType= {
    success: false,
    user: {}
};

type ActionType = {
    type:  string,
    payload: RegisterResponseType
}

const authReducer = (state:DefaultStateType = DefaultState, action: ActionType) => {
    switch(action.type) {
        case AUTH_REGISTER:
            return {
                success: true,
                user: action.payload
            }
        case AUTH_REGISTER_FAIL:
            return {
                success: false,
                errors: action.payload
            }
        default: 
            return state;
    }
}

export default authReducer;