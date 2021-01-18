import axios from 'axios'
import {Dispatch} from 'redux'
import {history} from '../../store';
import {AutoType, AUTO_CREATE, AUTO_GET, GetAutoData} from './AutoTypes';
import {AuthType} from '../auth/AuthTypes'
import store from '../../store';

const url = "https://dev-test-mcbackend.herokuapp.com/";

export const AutoApply = (data: AutoType) =>  async (dispatch: Dispatch) => {
    const auth: AuthType = store.getState().auth;

    try {
        const res = (await axios.post(url + 'api/auto', data)).data;
        if(res.success) {
            dispatch({
                type: AUTO_CREATE,
                payload: res.data
            })

            if(auth.success) {
                history.replace('/dashboard')
            } else {
                history.replace('/register')
            }
        } else {
            history.replace('/')
        }
    } catch(err) {
        console.log(err);
    }
}

export const GetAutos = (data: GetAutoData) => async (dispatch: Dispatch) => {
    try {
        const res = (await axios.post(url + 'api/auto/get', data)).data;
        localStorage.setItem('autos', JSON.stringify(res.data));
  
        if(res.success) {
            dispatch({
                type: AUTO_GET,
                payload: res.data
            })
        }
    } catch(err) {
        console.log(err);
    }
}