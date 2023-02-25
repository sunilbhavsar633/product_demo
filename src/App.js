import React, { useEffect } from 'react';
import './App.css';
import Product from './Component/Product';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'primeflex/primeflex.css';
import { getUserById } from './Redux/actions';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserById(1));
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
      <Product />
    </div>
  );
}

export default App;
