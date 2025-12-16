import React from 'react'; 
import BannerCommon from '../../sections/common/BannerCommon'; 
import PricingMain from '../../sections/pricing/PricingMain';

const Pricing: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Pricing' breadcrumb='Our Pricing' />
            <PricingMain />
        </>
    );
};

export default Pricing;