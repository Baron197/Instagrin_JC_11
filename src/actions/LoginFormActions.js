import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_URL } from '../helpers/apiurl';

import { 
    INPUT_TEXT,
    HIDE_UNHIDE_PASSWORD,
    LOADING_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL
} from './types';

export const onInputText = (prop, value) => {
    return {
        type: INPUT_TEXT,
        payload: { 
            prop, value
        }
    }
}

export const hideUnhidePassword = () => {
    return {
        type: HIDE_UNHIDE_PASSWORD
    }
}

export const onUserLogin = ({ email, password }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOADING_LOGIN })
            const res = await axios.post(API_URL + `/user/login`, {
                                    email, password
                                })
            console.log(res.data)
            console.loog('hello')

            await AsyncStorage.setItem('usertoken', res.data.token);
            dispatch({ 
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            })

        } catch(err) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: err.response ? err.response.data.message : err.message
            })
        }
    }
}