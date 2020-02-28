import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
    INIT_EDIT_PROFILE,
    INPUT_EDIT_PROFILE_TEXT,
    SAVE_PROFILE_LOADING,
    USER_LOGIN_SUCCESS
} from './types';
import { API_URL } from '../helpers/apiurl';

export const initEditProfile = (user) => {
    return {
        type: INIT_EDIT_PROFILE,
        payload: user
    }
}

export const onInputEditProfileText = (prop, value) => {
    return {
        type: INPUT_EDIT_PROFILE_TEXT,
        payload: { 
            prop, value
        }
    }
}

export const saveProfile = ({ username, displayname, bio }) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SAVE_PROFILE_LOADING })
            const token = await AsyncStorage.getItem('usertoken')
            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            const res = await axios.put(API_URL + '/user/editprofiledata',{
                                    username,
                                    displayname,
                                    bio
                                }, options)
            await AsyncStorage.setItem('usertoken', res.data.token)
            dispatch({ 
                type: USER_LOGIN_SUCCESS,
                payload: res.data
            })

        } catch(err) {
            console.log(err)
        }
    }
}