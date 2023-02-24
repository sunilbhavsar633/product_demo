import {GET_PRODUCT,GET_PRODUCT_DETAIL} from './actionType';

export const getProduct=(page=0,limit=6,search="")=>{
    return {type:GET_PRODUCT,page,limit,search};
}

export const getProductDetails=(productId)=>{
    return {type:GET_PRODUCT_DETAIL,productId};
}