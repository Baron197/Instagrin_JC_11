import { 
    INPUT_TEXT,
    HIDE_UNHIDE_PASSWORD
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