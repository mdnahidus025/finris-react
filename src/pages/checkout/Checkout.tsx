import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import CheckoutMain from '../../sections/checkout/CheckoutMain';

const Checkout: React.FC = () => {
    return (
        <>
            <BannerCommon title='Checkout' subtitle='Page' breadcrumb='Checkout' />
            <CheckoutMain />
        </>
    );
};

export default Checkout;