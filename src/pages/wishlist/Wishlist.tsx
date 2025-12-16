import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import WishlistMain from '../../sections/wishlist/WishlistMain';

const Wishlist: React.FC = () => {
    return (
        <>
            <BannerCommon title='Wishlist' subtitle='Page' breadcrumb='Wishlist' />
            <WishlistMain />
        </>
    );
};

export default Wishlist;