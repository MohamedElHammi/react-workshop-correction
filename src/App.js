import logo from './logo.svg';
import './App.css';
import Products from './components/fnComponents/Products';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './redux/slices/productsSlice';

import NavigationBar from './components/NavigationBar';
// import NotFound from './components/NotFound';
const NotFound = React.lazy(() => import('./components/NotFound'));
// import ProductDetails from './components/fnComponents/ProductDetails';
const ProductDetails = React.lazy(() => import('./components/fnComponents/ProductDetails'));
// import TestComponent from './components/TestComponent';
const TestComponent = React.lazy(() => import('./components/TestComponent'));

const ProductFrom = React.lazy(() => import('./components/fnComponents/ProductForm'));
const ProductUpdateForm = React.lazy(() => import('./components/fnComponents/ProductUpdateForm'));


function App() {
  const dispatch = useDispatch();

  return (
    <>
    <React.Suspense fallback={<h1> Loading... </h1>}>
      <NavigationBar />
        <Routes>
          <Route path='/products'>
            <Route 
              index 
              element={<Products />} 
              loader={dispatch(fetchProducts())}
            />
            <Route path='add' element={<ProductFrom />}/>
            <Route path='update/:id' element={<ProductUpdateForm />}/>
            <Route path=':id' element={<ProductDetails />} />
          </Route>
          <Route path='/test' element={<TestComponent/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </React.Suspense>
    </>
  );
}

export default App;
