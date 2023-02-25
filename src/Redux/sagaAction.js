import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import { BASE_URL, API_PRODUCT, API_USER, API_PROD_INVENTORY } from './APIEndPoint';
import {
    GET_PRODUCT, SET_PRODUCT, GET_PRODUCT_DETAIL, SET_PRODUCT_DETAIL,
    GET_USERS, SET_USERS, GET_USER_BY_ID, SET_USER_BY_ID, UPDATE_USER_BY_ID, UPDATE_INVENTORY,
    SET_LOADING, UPDATE_PROD_BY_PROD_ID,GET_INVENTORY,SET_INVENTORY
} from './actionType'

function* getProduct(params) {
    const { page, limit, search } = params;
    let apiURL = `${BASE_URL}${API_PRODUCT}?_page=${page}&_limit=${limit}`;
    if (search !== "") {
        apiURL += `&search=${search}`;
    }
    const resp = yield axios.get(`${apiURL}`, {});
    const { data } = yield resp;
    yield put({ type: SET_PRODUCT, payLoad: { isLoading: false, products: data } });
}

function* getProductById(params) {
    const { productId } = params;
    let apiURL = `${BASE_URL}${API_PRODUCT}/${productId}`;
    const resp = yield axios.get(`${apiURL}`, {});
    const { data } = yield resp;
    yield put({ type: SET_PRODUCT_DETAIL, payLoad: { isLoading: false, products: data } });
}

function* getUsers() {
    let apiURL = `${BASE_URL}${API_USER}`;
    const resp = yield axios.get(`${apiURL}`, {});
    const { data } = yield resp;
    yield put({ type: SET_USERS, payLoad: { isLoading: false, users: data } });
}

function* getUserById(params) {
    const { userId } = params;
    let apiURL = `${BASE_URL}${API_USER}/${userId}`;
    const resp = yield axios.get(`${apiURL}`, {});
    const { data } = yield resp;
    yield put({ type: SET_USER_BY_ID, payLoad: { isLoading: false, user: data } });
}

function* updateUserById(params) {
    const { userId, obj } = params;
    let apiURL = `${BASE_URL}${API_USER}/${userId}`;
    const resp = yield axios.put(`${apiURL}`, {
        id: obj.id,
        name: obj.name,
        email: obj.email,
        orders: obj.orders,
        profileImg: obj.profileImg,
    });
    const { data } = yield resp;
    yield put({ type: SET_USER_BY_ID, payLoad: { isLoading: false, user: data } });
}

function* getInventory() {
    let apiURL = `${BASE_URL}${API_PROD_INVENTORY}`;
    const resp = yield axios.get(`${apiURL}`, {});
    const { data } = yield resp;
    yield put({ type: SET_INVENTORY, payLoad: { isLoading: false, prodInventory: data } });
}


function* updateInventory(params) {
    const { id, obj } = params;
    let apiURL = `${BASE_URL}${API_PROD_INVENTORY}/${id}`;
    const resp = yield axios.put(`${apiURL}`, {
        id: obj.id,
        prod_id: obj.prod_id,
        totalQty: obj.totalQty,
        avilableQty: obj.avilableQty,
        soldQty: obj.soldQty,
    });
    //eslint-disable-next-line
    const { data } = yield resp;
    yield put({ type: SET_LOADING, payLoad: { isLoading: false } });
}

function* updateProdByProdId(params) {
    const { prodId, obj } = params;
    let apiURL = `${BASE_URL}${API_PRODUCT}/${prodId}`;
    const resp = yield axios.put(`${apiURL}`, {
        id: obj.id,
        name: obj.name,
        product_code: obj.product_code,
        category: obj.category,
        price: obj.price,
        color:obj.color,
        brand:obj.brand,
        img:obj.img,
        isSold:obj.isSold,
        rating:obj.rating,
    });
    //eslint-disable-next-line
    const { data } = yield resp;
    yield put({ type: SET_LOADING, payLoad: { isLoading: false } });
}

function* sagaAction() {
    yield takeEvery(GET_PRODUCT, getProduct);
    yield takeEvery(GET_PRODUCT_DETAIL, getProductById);
    yield takeEvery(GET_USERS, getUsers);
    yield takeEvery(GET_USER_BY_ID, getUserById);
    yield takeEvery(UPDATE_USER_BY_ID, updateUserById);
    yield takeEvery(GET_INVENTORY, getInventory);
    yield takeEvery(UPDATE_PROD_BY_PROD_ID, updateProdByProdId);
    yield takeEvery(UPDATE_INVENTORY, updateInventory);
}
export default sagaAction;