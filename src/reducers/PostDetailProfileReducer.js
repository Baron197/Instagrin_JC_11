import {
    INIT_POST_DETAIL_PROFILE,
    DELETE_POST_FAIL,
    DELETE_POST_LOADING,
    DELETE_POST_SUCCESS,
    EDIT_POST,
    CANCEL_EDIT_POST
} from '../actions/types';

const INITIAL_STATE = {
    image: '',
    username: '',
    caption: '',
    profileimage: '',
    deleteLoading: false,
    editPost: false,
    editCaption: ''
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INIT_POST_DETAIL_PROFILE :
            return { ...INITIAL_STATE, ...action.payload  }
        case DELETE_POST_LOADING :
            return { ...state, deleteLoading: true }
        case DELETE_POST_SUCCESS :
            return INITIAL_STATE
        case DELETE_POST_FAIL :
            return { ...state, deleteLoading: false }
        case EDIT_POST :
            return { ...state, editPost: true, editCaption: action.payload }
        case CANCEL_EDIT_POST :
            return { ...state, editPost: false, editCaption: '' }
        default :
            return state
    }
}