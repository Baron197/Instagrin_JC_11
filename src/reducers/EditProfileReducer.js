import {
    INIT_EDIT_PROFILE
} from '../actions/types';

const INITIAL_STATE = {
    profileimage: '',
    username: '',
    displayname: '',
    bio: '',
    error: '',
    loading: false
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case INIT_EDIT_PROFILE :
            return { ...state, ...action.payload }
        default :
            return state
    }
}