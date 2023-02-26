import React,{memo} from "react";
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';

const ListProdItem = (props) => {
    const {product,handelClickOnProdCart,handelClickOnProdComp}=props;

    return (
        <div className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <img className="product-img w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={`${product.img}`} alt={product.name} />
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <div className="text-2xl font-bold text-900">{product.name}</div>
                        <Rating value={product.rating} readOnly cancel={false}></Rating>
                        <div className="flex align-items-center gap-3">
                            <span className="flex align-items-center gap-2">
                                <i className="pi pi-tag"></i>
                                <span className="font-semibold">{product.category}</span>
                            </span>
                            {!product.isSold?<Tag value={'INSTOCK'} severity={'success'}></Tag>
                    :<Tag value={'OUTOFSTOCK'} severity={'danger'}></Tag>}                    
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <span className="text-2xl font-semibold">${product.price}</span>
                        <Button className="p-button-rounded" onClick={()=>{handelClickOnProdComp(product)}}>Compare</Button>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.isSold} onClick={()=>{handelClickOnProdCart(product)}}></Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(ListProdItem);