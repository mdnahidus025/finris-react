import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import CartMain from '../../sections/cart/CartMain';

const Cart: React.FC = () => {
    return (
        <>
            <BannerCommon title='Cart' subtitle='Page' breadcrumb='cart' />
            <CartMain />
        </>
    );
};

export default Cart;