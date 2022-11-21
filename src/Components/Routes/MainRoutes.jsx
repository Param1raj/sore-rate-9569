import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../../Pages/HomePage';
export default function MainRoutes (){
    return <>
        <Routes>
            <Route to="/" element={<Home/>}></Route>
        </Routes>
    </>
}