import React, { useState } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import GridProdItem from './gridProdItem';
import ListProdItem from './listProdItem';
import ListSkeletonLoader from './listSkeletonLoader';
import GridSkeletonLoader from './gridSkeletonLoader';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { getProduct } from '../../../Redux/actions'

function Product() {
    const [layout, setLayout] = useState('grid');
    const { products, isLoading } = useSelector((state) => state);
    const [pageParms, setPageParms] = useState({ first: 0, page: 0, rows: 6, pageCount: 0 })
    const dispatch = useDispatch();

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }
        if (layout === 'list') return  (<ListProdItem product={product} />);
        else if (layout === 'grid') return (<GridProdItem product={product} />);
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
        dispatch(getProduct(page));
    }

    return (<>
        <div className="card">
            <div className="flex justify-content-end">
                <Button icon="pi pi-shopping-cart" className="p-button-rounded m" ></Button>
            </div>
            {isLoading ? layout === 'list' ? <ListSkeletonLoader /> : <GridSkeletonLoader /> :
                <DataView value={products} itemTemplate={itemTemplate} layout={layout} header={header()}
                    paginator rows={pageParms.rows} totalRecords={50} onPage={handelPageChage} />}

        </div>
    </>)
}
export default Product;