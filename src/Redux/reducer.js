import { SET_PRODUCT, SET_PRODUCT_DETAIL } from './actionType'

const initialState = {
  isLoading:true,  
  products:[],
  productDetails:null,
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
        default:
            return state;
    }
}
export default reducer;