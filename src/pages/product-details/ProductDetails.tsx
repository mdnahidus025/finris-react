import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import ProductDetailsMain from '../../sections/product-details/ProductDetailsMain';

const ProductDetails: React.FC = () => {
    return (
        <>
            <BannerCommon title='Product' subtitle='Details' breadcrumb='Product Details' />
            <ProductDetailsMain />
        </>
    );
};

export default ProductDetails;