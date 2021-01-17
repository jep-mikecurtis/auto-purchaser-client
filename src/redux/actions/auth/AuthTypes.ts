export const AUTH_REGISTER = 'AUTH_REGISTER';
export const AUTH_REGISTER_FAIL = 'AUTH_REGISTER_FAIL';

export type RegisterType = {
    email: string
    name: string
    password: string
    passwordConfirm: string
}

export type  RegisterResponseType = {
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