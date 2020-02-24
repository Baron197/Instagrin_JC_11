import {
    INPUT_TEXT,
    HIDE_UNHIDE_PASSWORD,
    ERROR_LOGIN,
    LOADING_LOGIN,
    USER_LOGIN_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    hidePassword: true,
    error: '',
    loading: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INPUT_TEXT :
            return { ...state, [action.payload.prop]: action.payload.value }
        case HIDE_UNHIDE_PASSWORD :
            return { ...state, hidePassword: !state.hidePassword }
        case ERROR_LOGIN :
            return { ...state, error: action.payload }
        case LOADING_LOGIN :
            return { ...state, loading: true }
        case USER_LOGIN_SUCCESS :
            return INITIAL_STATE
        default :
            return state      
    }
}