import React from 'react';
import { Route, Routes } from 'react-router';
import Cart from './components/cart/Cart';
import ItemDetailContainer from './components/detail/ItemDetailContainer';
import ItemListContainer from './components/item/ItemListContainer';

const Main = () => {
  return (
    <div className="main">
        <Routes>
            <Route path="/" element={<ItemListContainer/ >} />
            <Route path="/producto/:id" element={<ItemDetailContainer/>} />
            <Route path='/menu/cart' element={<Cart/>} />
        </Routes>
    </div>
  )
}

export default Main