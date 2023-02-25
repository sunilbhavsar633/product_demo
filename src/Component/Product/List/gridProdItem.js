import React from "react";
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

const GridProdItem = (props) => {
    const {product,handelClickOnProdCart}=props;
    
    return (
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div className="p-4 border-1 surface-border surface-card border-round">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                    <div className="flex align-items-center gap-2">
                        <i className="pi pi-tag"></i>
                        <span className="font-semibold">
                            {product.category}</span>
                    </div>
                    {!product.isSold?<Tag value={'INSTOCK'} severity={'success'}></Tag>
                    :<Tag value={'OUTOFSTOCK'} severity={'danger'}></Tag>}                    
                </div>
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <img className="product-img w-9 shadow-2 border-round" src={`${product.img}`} alt={product.name} />
                    <div className="text-2xl font-bold">{product.name}</div>
                    <Rating value={product.rating} readOnly cancel={false}></Rating>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-2xl font-semibold">${product.price}</span>
                    <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.isSold}
                    onClick={()=>{handelClickOnProdCart(product)}}></Button>
                </div>
            </div>
        </div>
    );
};
export default GridProdItem;