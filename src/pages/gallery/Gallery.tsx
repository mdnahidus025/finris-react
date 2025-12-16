import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import GalleryMain from '../../sections/gallery/GalleryMain';

const Gallery: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Gallery' breadcrumb='Our Gallery' />
            <GalleryMain />
        </>
    );
};

export default Gallery;