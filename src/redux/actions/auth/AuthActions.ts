import axios from 'axios'
import {Dispatch} from 'redux'
import {history} from '../../store';
import store from '../../store';

// Types
import {AUTH_REGISTER, AUTH_REGISTER_FAIL, AUTH_LOGIN, AUTH_LOGIN_FAIL, AUTH_LOGOUT, RegisterType, AuthResponseType, AuthType, LoginType} from './AuthTypes'


const url = "https://dev-test-mcbackend.herokuapp.com/";

export const AuthRegister = (data: RegisterType) =>  async (dispatch: Dispatch) => {
    try {
        const res: AuthResponseType = (await axios.post(url + 'api/register', data)).data;
        if(res.success) {
            dispatch({
                type: AUTH_REGISTER,
                payload: res.data
            })
            history.replace('/dashboard')
        } else {
            dispatch({
                type: AUTH_REGISTER_FAIL,
                payload: res.errors
            })
        }
    } catch(err) {
        console.log(err);
    }
}

export const AuthLogin = (data: LoginType) => async (dispatch: Dispatch) => {
    try {
        const res: AuthResponseType = (await axios.post(url + 'api/login', data)).data;
        localStorage.setItem('auth', JSON.stringify(res.data));
        
        if(res.success) {
            dispatch({
                type: AUTH_LOGIN,
                payload: res.data
            })
   
            history.replace('/dashboard')
        } else {
            dispatch({
                type: AUTH_LOGIN_FAIL,
                payload: res.errors
            })
        }

    } catch(err) {
        console.log(err);
    }
}

export const AuthLogout = () => async (dispatch: Dispatch) => {
    try {
        const auth: AuthType = store.getState().auth;
        if(auth.success) {
            const res = await axios.post(url + 'api/logout', auth.user);
            localStorage.removeItem('auth');
            history.replace('/')

            if(res.data.success) {
                dispatch({
                    type: AUTH_LOGOUT,
                    payload: {}
                })   
            }
        }
    } catch(err) {
       
    }
}