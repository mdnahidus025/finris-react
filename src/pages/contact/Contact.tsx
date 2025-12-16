import React from 'react'; 
import BannerCommon from '../../sections/common/BannerCommon'; 
import ContactMain from '../../sections/contact/ContactMain';

const Contact: React.FC = () => {
    return (
        <>
            <BannerCommon title='Contact' subtitle='Us' breadcrumb='Contact Us' />
            <ContactMain />
        </>
    );
};

export default Contact;