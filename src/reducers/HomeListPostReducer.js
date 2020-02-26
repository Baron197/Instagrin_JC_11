import {
    FILL_LIST_POST
} from '../actions/types';

const INITIAL_STATE = []

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case FILL_LIST_POST :
            return action.payload
        default :
            return state
    }
}