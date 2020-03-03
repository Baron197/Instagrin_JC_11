import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { API_URL } from '../helpers/apiurl';
import {
    INPUT_CAPTION_CHANGE,
    IMAGE_CHANGE,
    POST_PHOTO_FAIL,
    POST_PHOTO_LOADING,
    POST_PHOTO_SUCCESS
} from './types';

export const onInputCaptionChange = (caption) => {
    return {
        type: INPUT_CAPTION_CHANGE,
        payload: caption
    }
}
