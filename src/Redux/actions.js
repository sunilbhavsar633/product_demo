import {GET_PRODUCT,GET_PRODUCT_DETAIL,SET_LOADING,GET_USERS,GET_USER_BY_ID,UPDATE_USER_BY_ID,
    UPDATE_INVENTORY,UPDATE_PROD_BY_PROD_ID, GET_INVENTORY} from './actionType';
export const setLoading =  (isLoading) => {
    return {type:SET_LOADING,action:{payload:{isLoading}}}
}

export const getProduct=(page=0,limit=6,search="")=>{
    return {type:GET_PRODUCT,page,limit,search};
}

export const getProductById=(productId)=>{
    return {type:GET_PRODUCT_DETAIL,productId};
}

export const getUsers=()=>{
    return {type:GET_USERS};
}

export const getUserById=(userId)=>{
    return {type:GET_USER_BY_ID,userId};
}

export const updateUserById=(userId,obj)=>{
    return {type:UPDATE_USER_BY_ID,userId,obj};
}

export const getInventory=()=>{
    return {type:GET_INVENTORY};
}

export const updateInventory=(id,obj)=>{
    return {type:UPDATE_INVENTORY,id,obj};
}

export const updateProdByProdId=(prodId,obj)=>{
    return {type:UPDATE_PROD_BY_PROD_ID,prodId,obj};
}

