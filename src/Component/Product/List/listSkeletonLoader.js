import React from "react";
import { Skeleton } from 'primereact/skeleton';

export default function ListSkeletonLoader(){
    return (
        <>{[1,2,3,4,5,6].map((it,key)=>{
            return(<div key={`list${key}`} className="col-12">
            <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                <Skeleton className="w-9 sm:w-16rem xl:w-10rem shadow-2 h-6rem block xl:block mx-auto border-round" />
                <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                    <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                        <Skeleton className="w-8rem border-round h-2rem" />
                        <Skeleton className="w-6rem border-round h-1rem" />
                        <div className="flex align-items-center gap-3">
                            <Skeleton className="w-6rem border-round h-1rem" />
                            <Skeleton className="w-3rem border-round h-1rem" />
                        </div>
                    </div>
                    <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                        <Skeleton className="w-4rem border-round h-2rem" />
                        <Skeleton shape="circle" className="w-3rem h-3rem" />
                    </div>
                </div>
            </div>
        </div>)
        })}</>
    );
}