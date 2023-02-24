import React, { useEffect } from "react";
import { getProduct } from '../../Redux/actions';
import { useDispatch} from 'react-redux';
import List from './List';
import './product.css';

export default function Product() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getProduct(0));
        // eslint-disable-next-line
    }, []);
    return (<>
        <List />
    </>);
}