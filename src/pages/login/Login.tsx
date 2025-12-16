import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import LoginMain from '../../sections/authentication/LoginMain';

const Login: React.FC = () => {
    return (
        <>
            <BannerCommon title='Login' subtitle='Page' breadcrumb='Login' />
            <LoginMain />
        </>
    );
};

export default Login;