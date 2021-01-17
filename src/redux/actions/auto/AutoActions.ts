import axios from 'axios'
import {Dispatch} from 'redux'
import {history} from '../../store';
import {AutoType, AUTO_CREATE, GetAutoData} from './AutoTypes';

const url = "http://laravel-react.test/";

export const AutoApply = (data: AutoType) =>  async (dispatch: Dispatch) => {
    try {
        const res = (await axios.post(url + 'api/auto', data)).data;
        if(res.success) {
            dispatch({
                type: AUTO_CREATE,
                payload: res.data
            })

            history.replace('/register')
        } else {
           
        }
    } catch(err) {
        console.log(err);
    }
}



export const GetAutos = (data: GetAutoData) => async (dispatch: Dispatch) => {
    try {
        const res = (await axios.post(url + 'api/auto/get', data)).data;
        if(res.success) {
            dispatch({
                type: AUTO_CREATE,
                payload: res.data
            })
        }
    } catch(err) {
        console.log(err);
    }
}