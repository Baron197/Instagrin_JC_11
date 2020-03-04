import {
    INIT_POST_DETAIL_PROFILE
} from './types';

export const initPostDetailProfile = (post) => {
    return {
        type: INIT_POST_DETAIL_PROFILE,
        payload: post
    }
}