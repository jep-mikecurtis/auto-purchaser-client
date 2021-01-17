import axios from 'axios'
import {Dispatch} from 'redux'
import {history} from '../../store';

// Types
import {AUTH_REGISTER, AUTH_REGISTER_FAIL, RegisterType, RegisterResponseType} from './AuthTypes'

const url = "http://laravel-react.test/";

export const AuthRegister = (data: RegisterType) =>  async (dispatch: Dispatch) => {
    try {
        const res: RegisterResponseType = (await axios.post(url + 'api/register', data)).data;
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