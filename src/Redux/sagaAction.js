import { takeEvery, put } from 'redux-saga/effects';
import axios from "axios";
import { BASE_URL, GET_PRODUCT_LIST } from './APIEndPoint';
import { GET_PRODUCT, SET_PRODUCT, } from './actionType'

function* getProduct(params) {
    const { page, limit, search } = params;
    let apiURL = `${BASE_URL}${GET_PRODUCT_LIST}?_page=${page}&_limit=${limit}`;
    if (search !== "") {
        apiURL += `&search=${search}`;
    }
    const resp = yield axios.get(`${apiURL}`, {});
    const {data } = yield resp;
    yield put({type:SET_PRODUCT,payLoad:{isLoading:false,products:data}});
}

function* sagaAction() {
    yield takeEvery(GET_PRODUCT, getProduct);
}
export default sagaAction;