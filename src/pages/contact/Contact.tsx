import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon'; 
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import ContactMain from '../../sections/contact/ContactMain';

const Contact: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Contact' subtitle='Us' breadcrumb='Contact Us'  />
            <ContactMain  /> 
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default Contact;