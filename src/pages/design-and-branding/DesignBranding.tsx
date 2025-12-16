import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import DesignBrandingMain from '../../sections/design-and-branding/DesignBrandingMain';

const DesignBranding: React.FC = () => {
    return (
        <>
            <BannerCommon title='Design &' subtitle='Branding' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Design & Branding' />
            <DesignBrandingMain />
            <CtaCommon />
        </>
    );
};

export default DesignBranding;