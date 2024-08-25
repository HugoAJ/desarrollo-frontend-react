import { SET_FORM_DATA } from './FormTypes';
import { CLEAN_FORM_DATA } from './FormTypes';

const initialState = {
    formData: {
        username: '',
        email: '',
        password: '',
    },
};

const passwordKey = 'mod7ReactUSIP';

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...state.formData,
                    ...action.payload
                }
            }
        }
        case CLEAN_FORM_DATA : {
            return {
                ...state,
                formData: {
                    ...initialState,
                    ...action.payload
                }
            }
        }
        default:
            return state;
    }
};

export default formReducer; 
export {passwordKey};
