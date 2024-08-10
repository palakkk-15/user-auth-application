import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Use 'Routes' instead of 'Switch'
import Register from './auth/Register';
import Login from './auth/Login';
import ProductsList from './ProductList';

const AppRoutes = () => {
    return (
        <Routes> {/* Updated from <Switch> to <Routes> */}
            <Route path='/register' element={<Register />} /> {/* Use 'element' prop instead of children */}
            <Route path='/login' element={<Login />} />
            <Route path='/porducts' element={<ProductsList />} />
        </Routes>
    );
};

export default AppRoutes;
