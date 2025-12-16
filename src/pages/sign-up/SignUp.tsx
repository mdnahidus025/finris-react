import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import SignupMain from '../../sections/authentication/SignupMain';

const SignUp: React.FC = () => {
    return (
        <>
            <BannerCommon title='Sign Up' subtitle='Page' breadcrumb='Sign Up' />
            <SignupMain />
        </>
    );
};

export default SignUp;