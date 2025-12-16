import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import AppDevelopmentMain from '../../sections/app-development/AppDevelopmentMain';

const AppDevelopment: React.FC = () => {
    return (
        <>
            <BannerCommon title='App' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='App Development' />
            <AppDevelopmentMain />
            <CtaCommon />
        </>
    );
};

export default AppDevelopment;