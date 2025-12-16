import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import WebDesignMain from '../../sections/web-design/WebDesignMain';

const WebDesign: React.FC = () => {
    return (
        <>
            <BannerCommon title='Web Design &' subtitle='Development' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Web Design & Development' />
            <WebDesignMain />
            <CtaCommon />
        </>
    );
};

export default WebDesign;