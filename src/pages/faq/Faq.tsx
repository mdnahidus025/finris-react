import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import FaqMain from '../../sections/faq/FaqMain';

const Faq: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Faq' breadcrumb='Our Faq' />
            <FaqMain />
        </>
    );
};

export default Faq;