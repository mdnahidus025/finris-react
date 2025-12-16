import React from 'react'; 
import BannerCommon from '../../sections/common/BannerCommon'; 
import ServiseInner from '../../sections/service/ServiseInner';
import WhyChooseInner from '../../sections/service/WhyChooseInner';
import ContactInner from '../../sections/service/ContactInner';
import FaqInner from '../../sections/service/FaqInner';
import PricingInner from '../../sections/service/PricingInner';

const Service: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Services' breadcrumb='Our Services' />
            <ServiseInner />
            <WhyChooseInner />
            <ContactInner />
            <FaqInner />
            <PricingInner />
        </>
    );
};

export default Service;