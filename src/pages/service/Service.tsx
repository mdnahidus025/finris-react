import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import ServiseInner from '../../sections/service/ServiseInner';
import WhyChooseInner from '../../sections/service/WhyChooseInner';
import ContactInner from '../../sections/service/ContactInner';
import FaqInner from '../../sections/service/FaqInner';
import PricingInner from '../../sections/service/PricingInner';

const Service:React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Our' subtitle='Services' breadcrumb='Our Services' />
            <ServiseInner />
            <WhyChooseInner />
            <ContactInner />
            <FaqInner />
            <PricingInner />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Service;