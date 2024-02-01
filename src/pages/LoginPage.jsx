import React from 'react';
import LoginUser from '../components/auth/LoginUser';

const LoginPage = ({rus}) => {
    return (
        <div>
            <LoginUser rus={rus}/>
        </div>
    );
};

export default LoginPage;