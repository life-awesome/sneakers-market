import {HIDE_BACKDROP, SHOW_BACKDROP} from "../actions/backdrop";
import {CHANGE_STATUS_SNEAKER} from "../actions/ChangeSneakerToCart";
import {CHANGE_FAVORITE_SNEAKER} from "../actions/ChangeFavoriteSneaker";
import {ADD_ALL_SNEAKERS} from "../actions/async/asyncAddAllSneakers";

const initialState = {
    showBackdrop: false,
    sneakers: []
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ALL_SNEAKERS : {
            return {...state, sneakers: [...state.sneakers, ...action.payload]}
        }
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
        case CHANGE_STATUS_SNEAKER : {
            const arr = [...state.sneakers]
            arr.map(obj => {
                if (obj.id === action.payload) {
                    obj.status = !obj.status
                }
                return obj
            })
            return {
                ...state,
                sneakers: arr
            }
        }
        case CHANGE_FAVORITE_SNEAKER : {
            const arr = [...state.sneakers]
            arr.map(obj => {
                if (obj.id === action.payload) {
                    obj.favorite = !obj.favorite
                }
                return obj
            })
            return {
                ...state,
                sneakers: arr
            }
        }
        default : {
            return state
        }
    }
}