import React, { memo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import {addProdToComp} from '../../../Redux/actions';
import { DataView } from 'primereact/dataview';


function ProductComp() {
    const dispatch = useDispatch();
    const { prodComp } = useSelector(state => state);
    console.log("comp cll");

    const handelClickOnRemove = (product) => {
        const compObj = [...prodComp];
        const findIndex = compObj.findIndex(x => x.id === product.id);
        if (findIndex !== -1) {
            compObj.splice(findIndex, 1);
            dispatch(addProdToComp(compObj));
        }
    }

    const itemTemplate=(product)=>{
        return (<div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
        <div className="p-4 border-1 surface-border surface-card border-round">
            <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                <div className="flex align-items-center gap-2">
                    <i className="pi pi-tag"></i>
                        <span className="font-semibold">
                        {product.category}</span>    
                        <span className="font-semibold">
                        {product.product_code}</span>
                </div>
            </div>
            <div className="flex flex-column align-items-center gap-3 py-5">
                <img className="product-img w-9 shadow-2 border-round" src={`${product.img}`} alt={product.name} />
                <div className="text-2xl font-bold">{product.name}</div>
                <Rating value={product.rating} readOnly cancel={false}></Rating>
                <span className="text-2xl font-semibold">{product.color}</span>
            </div>
            <div className="flex align-items-center justify-content-between">
                <span className="text-2xl font-semibold">${product.price}</span>
                <Button className="p-button-rounded" onClick={() => { handelClickOnRemove(product) }}>Remove Product</Button>
            </div>
        </div>
    </div>    
)
    }

    return (<div className="card">
        {prodComp.length > 0 ? <DataView value={prodComp} itemTemplate={itemTemplate} /> : <span>No product to compare</span>}
    </div>);
}
export default memo(ProductComp);