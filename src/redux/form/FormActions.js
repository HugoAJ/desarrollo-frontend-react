import { SET_FORM_DATA } from './FormTypes';
import { passwordKey } from './FormReducers';
import { CLEAN_FORM_DATA } from './FormTypes';

export const saveFormData = (formData) => {
    if (formData.password == passwordKey) {
        return {
            type: SET_FORM_DATA,
            payload: formData,
        }
    }    
}
export const cleanFormData = (formData) => {
    return {
        type: CLEAN_FORM_DATA,
        payload: formData,
    }   
}