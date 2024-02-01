import React from 'react';
import { Container } from 'react-bootstrap';
import RegisterUser from '../components/auth/RegisterUser';
import "./RegisterPage.css"

const RegisterPage = ({rus}) => {
    return (
        <div  className='bg'>
            <RegisterUser rus={rus}></RegisterUser>
        </div>
    );
};

export default RegisterPage;