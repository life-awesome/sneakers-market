import {HIDE_BACKDROP, SHOW_BACKDROP} from "../actions/backdrop";
import {sneakers} from "../sneakers/sneakers";
import {CHANGE_STATUS_SNEAKER} from "../actions/ChangeSneakerToCart";
import {CHANGE_FAVORITE_SNEAKER} from "../actions/ChangeFavoriteSneaker";

const initialState = {
    showBackdrop: false,
    sneakers: [...sneakers]
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
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