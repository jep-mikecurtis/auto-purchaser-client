import axios from 'axios'
import {Dispatch} from 'redux'
import {AutoType, AUTO_CREATE} from './AutoTypes';

const url = "http://laravel-react.test/";

export const AutoApply = (data: AutoType) =>  async (dispatch: Dispatch) => {
    try {
        const res = (await axios.post(url + 'api/auto', data)).data;
        console.log(res);
        if(res.success) {
            dispatch({
                type: AUTO_CREATE,
                payload: res.data
            })
        } else {
           
        }
    } catch(err) {
        console.log(err);
    }
}