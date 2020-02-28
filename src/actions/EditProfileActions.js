import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {
    INIT_EDIT_PROFILE
} from './types';

export const initEditProfile = (user) => {
    return {
        type: INIT_EDIT_PROFILE,
        payload: user
    }
}
