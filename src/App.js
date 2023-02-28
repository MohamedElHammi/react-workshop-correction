import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent';
import { Routes, Route } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';

// import NotFound from './components/NotFound';
// import Products from './components/fnComponents/Products';
// import ProductDetails from './components/fnComponents/ProductDetails';

const NotFound = React.lazy(() => import('./components/NotFound'));
const Products = React.lazy(() => import('./components/fnComponents/Products'));
const ProductDetails = React.lazy(() => import('./components/fnComponents/ProductDetails'));

function App() {
  return (
    <>
    <React.Suspense fallback={<h1> Loading... </h1>}>
      <NavigationBar />
      <Routes>
        <Route path='/products'>
          <Route index element={<Products />} />
          <Route path=':name' element={<ProductDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </React.Suspense>
    </>
  );
}

export default App;
