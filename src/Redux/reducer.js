import {
    SET_PRODUCT, SET_PRODUCT_DETAIL, SET_LOADING, SET_USERS, SET_USER_BY_ID,
    SET_INVENTORY
} from './actionType'

const initialState = {
    isLoading: true,
    products: [],
    productDetails: null,
    users: [],
    user: null,
    prodInventory:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT:
            return {
                ...state,
                ...action.payLoad
            }
        case SET_PRODUCT_DETAIL:
            return {
                ...state,
                ...action.payLoad
            }
        case SET_LOADING:
            return {
                ...state,
                ...action.payLoad
            }
        case SET_USERS:
            return {
                ...state,
                ...action.payLoad
            }
        case SET_USER_BY_ID:
            return {
                ...state,
                ...action.payLoad
            }
        case SET_INVENTORY:
            return {
                ...state,
                ...action.payLoad
            }
        default:
            return state;
    }
}
export default reducer;