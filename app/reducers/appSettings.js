import { actionTypes } from '../actions/index';

const initialState = {
    theme: ''
};

export default (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }
            break;
    }
    return state;
}