export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_FAIL = 'AUTH_REGISTER_FAIL';
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL';
export const AUTH_LOGOUT = "AUTH_LOGOUT";


// Register Typs
export type RegisterType = {
    email: string
    name: string
    password: string
    passwordConfirm: string
}

// Type Coming From Backend
export type  AuthResponseType = {
    success: boolean
    data: {
        email: string
        name: string
        api_token: string
    }
    errors?: [
        {}
    ]
}

// Type For Auth State
export type AuthStateType = {
    auth: {
        success?: boolean
        errors?: {
            name?: []
            email?: []
            error?: []
            password?: []
            passwordConfirm?: []
        }
    }
}

export type AuthType = {

    success: boolean
    user: {
        email: string
    }

}


// Login Types
export type LoginType = {
    email: string
    password: string
}

