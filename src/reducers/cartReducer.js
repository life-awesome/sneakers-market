import {HIDE_BACKDROP, SHOW_BACKDROP} from "../actions/backdrop";

const initialState = {
    showBackdrop : false
}

export const cartReducer = (state = initialState, action ) => {
    switch (action.type){
        case SHOW_BACKDROP : {
            return {
                ...state,
                showBackdrop: true
            }
        }
        case HIDE_BACKDROP : {
            return {
                ...state,
                showBackdrop: false
            }
        }
        default : {
            return state
        }
    }
}