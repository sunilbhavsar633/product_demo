import React, { useState,memo } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import GridProdItem from './gridProdItem';
import ListProdItem from './listProdItem';
import ListSkeletonLoader from './listSkeletonLoader';
import GridSkeletonLoader from './gridSkeletonLoader';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import {
    getProduct, setLoading, getUserById, updateUserById, updateInventory,
    updateProdByProdId, addProdToComp
} from '../../../Redux/actions';
import { Dropdown } from 'primereact/dropdown';
import { useNavigate } from "react-router-dom";

function Product() {
    const [layout, setLayout] = useState('grid');
    const { products, isLoading, user, users, prodInventory, prodComp } = useSelector((state) => state);
    const [pageParms, setPageParms] = useState({ first: 0, page: 0, rows: 6, pageCount: 0 })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handelClickOnProdCart = (prod) => {
        const userObj = { ...user };
        const prodObj = { ...prod };
        const invArrObj = [...prodInventory]
        const invObj = invArrObj?.find(x => x.prod_id === prodObj.id);
        userObj.orders.push(prod);
        if (user?.orders?.length > 0) {
            const prodlength = user.orders.filter(x => x.id === prodObj.id).length;
            if (prodlength > prod?.limit) {
                alert("Only user can purchase upto 2 qty per product");
            } else {
                dispatch(updateUserById(user.id, userObj));
                invObj.avilableQty = invObj.avilableQty - 1;
                invObj.soldQty = invObj.soldQty + 1;
                dispatch(updateInventory(invObj.id, invObj));
                if (invObj.soldQty === invObj.totalQty) {
                    prodObj.isSold = true;
                    dispatch(updateProdByProdId(prodObj.id, prodObj));
                    setTimeout(() => {
                        dispatch(getProduct(pageParms.page));
                    }, 3000);
                }
            }
        }

    }

    const handelClickOnProdComp = (prod) => {
        const compArrObj = [...prodComp];
        if (compArrObj.length < 3) {
            let isExist = compArrObj.filter(x => x.id === prod.id).length;
            if (isExist === 0) {
                compArrObj.push(prod);
                dispatch(addProdToComp(compArrObj));
            } else {
                alert("This prod alredy exist");
            }
        } else {
            alert("You can't compare more the 3 Product");
        }
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }
        if (layout === 'list') return (<ListProdItem product={product} handelClickOnProdCart={handelClickOnProdCart} handelClickOnProdComp={handelClickOnProdComp} />);
        else if (layout === 'grid') return (<GridProdItem product={product} handelClickOnProdCart={handelClickOnProdCart} handelClickOnProdComp={handelClickOnProdComp} />);
    };

    const header = () => {
        return (
            <div className="flex justify-content-end">
                <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
            </div>
            );
    };

    function handelPageChage(e) {
        const { page } = e;
        setPageParms(e);
        console.log("page:--",page);
        dispatch(setLoading(true));
        dispatch(getProduct(page+1));
    }

    function handelChageOnUser(e) {
        const val = e.value;
        dispatch(getUserById(val));
    }

    function handelClickOnViewCompProd(){
        navigate('/productComp');        
    }

    return (<>
        <div className="card">
            <div className="flex justify-content-end">
            <Button className="p-button-rounded" disabled={prodComp.length<=1} 
            onClick={handelClickOnViewCompProd}>View Compare Prod</Button>
                <Dropdown value={user?.id} onChange={handelChageOnUser}
                    options={users} optionLabel="name" optionValue="id"
                    placeholder="Select a User" className="ms-2" />
                <span className="ms-4">{user && user?.name}<i className="pi pi-user "></i></span>
                <Button icon="pi pi-shopping-cart" className="p-button-rounded ms-4" >{user && user?.orders?.length}</Button>
            </div>
            {isLoading ? layout === 'list' ? <ListSkeletonLoader /> : <GridSkeletonLoader /> :
                <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()}
                    paginator rows={pageParms.rows} totalRecords={15} onPage={handelPageChage} />}

        </div>
    </>)
}
export default memo(Product);