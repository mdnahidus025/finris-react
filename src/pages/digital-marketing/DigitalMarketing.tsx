import React from 'react'; 
import BannerCommon from '../../sections/common/BannerCommon'; 
import CtaCommon from '../../sections/common/CtaCommon';
import DigitalMain from '../../sections/digital-marketing/DigitalMain';

const DigitalMarketing: React.FC = () => {
    return (
        <>
            <BannerCommon title='Digital' subtitle='Marketing' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Digital Marketing' />
            <DigitalMain />
            <CtaCommon />
        </>
    );
};

export default DigitalMarketing;