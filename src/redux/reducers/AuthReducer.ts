import { AUTH_REGISTER, AUTH_REGISTER_FAIL, AUTH_LOGIN, AUTH_LOGIN_FAIL, AUTH_LOGOUT, AuthResponseType } from '../actions/auth/AuthTypes'

type DefaultStateType = {
    success: boolean
    user: {
        name?: string,
        email?: string,
        api_token?: string
    }
    errors?: []
}
const DefaultState: DefaultStateType = {
    success: false,
    user: {}
};

type ActionType = {
    type: string,
    payload: AuthResponseType
}

//Check If Auth Was Saved To Local Storage
// And Set Default State
const auth = JSON.parse(localStorage.getItem('auth') || "{}");
if (auth) {
    DefaultState.success = true
    DefaultState.user = auth
}

const authReducer = (state: DefaultStateType = DefaultState, action: ActionType) => {
    switch (action.type) {
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
        case AUTH_LOGIN:
            return {
                success: true,
                user: action.payload
            }
        case AUTH_LOGIN_FAIL:
            return {
                success: false,
                errors: action.payload
            }
        case AUTH_LOGOUT:
            return {
                success: false,
                user: {}
            }
        default:
            return state;
    }
}

export default authReducer;