import React,{memo} from "react";
import { Skeleton } from 'primereact/skeleton';

function GridSkeletonLoader(){
    return (
        <div className="p-grid grid p-nogutter grid-nogutter">{[1,2,3,4,5,6].map((it,key)=>{
            return(<div key={`grid${key}`} className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div className="p-4 border-1 surface-border surface-card border-round">
                <div className="flex flex-wrap align-items-center justify-content-between gap-2">
                    <Skeleton className="w-6rem border-round h-1rem" />
                    <Skeleton className="w-3rem border-round h-1rem" />
                </div>
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <Skeleton className="w-9 shadow-2 border-round h-10rem" />
                    <Skeleton className="w-8rem border-round h-2rem" />
                    <Skeleton className="w-6rem border-round h-1rem" />
                </div>
                <div className="flex align-items-center justify-content-between">
                    <Skeleton className="w-4rem border-round h-2rem" />
                    <Skeleton shape="circle" className="w-3rem h-3rem" />
                </div>
            </div>
        </div>)
         })}</div>
    );
}
export default memo(GridSkeletonLoader);