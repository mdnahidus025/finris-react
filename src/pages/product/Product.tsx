import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import ProductMain from '../../sections/product/ProductMain';

const Product: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Products' breadcrumb='Our Products' />
            <ProductMain />
        </>
    );
};

export default Product;