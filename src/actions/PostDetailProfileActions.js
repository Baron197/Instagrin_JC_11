import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../helpers/apiurl';

import {
    INIT_POST_DETAIL_PROFILE,
    DELETE_POST_FAIL,
    DELETE_POST_LOADING,
    DELETE_POST_SUCCESS,
    EDIT_POST,
    CANCEL_EDIT_POST
} from './types';

export const initPostDetailProfile = (post) => {
    return {
        type: INIT_POST_DETAIL_PROFILE,
        payload: post
    }
}

export const editingPost = (caption) => {
    return {
        type: EDIT_POST,
        payload: caption
    }
}

export const cancelEditPost = () => {
    return {
        type: CANCEL_EDIT_POST
    }
}

export const deletePost = (postId) => {
    return async (dispatch) => {
        try {
            dispatch({ type: DELETE_POST_LOADING })
            const token = await AsyncStorage.getItem('usertoken');
            const options = {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }

            const res = await axios.delete(API_URL + '/post/deletepost/' + postId, options)
            dispatch({ type: DELETE_POST_SUCCESS })
        } catch(err) {
            console.log(err)
            dispatch({ type: DELETE_POST_FAIL })
        }
    }
}