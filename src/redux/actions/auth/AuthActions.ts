import axios from 'axios'
import {Dispatch} from 'redux'
import {history} from '../../store';

// Types
import {AUTH_REGISTER, AUTH_REGISTER_FAIL, AUTH_LOGIN, AUTH_LOGIN_FAIL, RegisterType, AuthResponseType, LoginType} from './AuthTypes'
import {GetAutos} from '../auto/AutoActions';

const url = "http://laravel-react.test/";

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