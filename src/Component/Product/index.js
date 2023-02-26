import React, { useEffect } from "react";
import { getProduct,getUsers,getInventory } from '../../Redux/actions';
import { useDispatch} from 'react-redux';
import List from './List';
import './product.css';

export default function Product() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getUsers());
        dispatch(getProduct(1));
        dispatch(getInventory());
        // eslint-disable-next-line
    }, []);
    return (<>
        <List />
    </>);
}