import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const MainRoutes = ({rus, setRus}) => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/register' element={<RegisterPage rus={rus} setRus={setRus}/>}/>
                <Route path='/login' element={<LoginPage rus={rus} setRus={setRus}/>}/>
            </Routes>
        </div>
    );
};

export default MainRoutes;