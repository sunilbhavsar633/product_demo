import React, { useEffect, Suspense } from 'react';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import { getUserById } from './Redux/actions';
import { useDispatch } from 'react-redux'
import { useRoutes } from "react-router-dom";

const Product = React.lazy(() => import('./Component/Product'));
const ProductComp = React.lazy(() => import('./Component/Product/ProductComp'));

function App() {
  const dispatch = useDispatch();
  let routes = [
    {
      path: "/",
      element: <Product />,
    }, {
      path: "/productComp",
      element: <ProductComp />,
    },

  ];
  let element = useRoutes(routes);


  useEffect(() => {
    dispatch(getUserById(1));
    // eslint-disable-next-line
  }, [])

  return (
    <Suspense fallback={"...Loading"}>
      {element}
    </Suspense>
  );
}

export default App;
