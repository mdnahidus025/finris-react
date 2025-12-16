import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import BlogCarouselMain from '../../sections/blog/BlogCarouselMain';

const BlogCarousel: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogCarouselMain />
        </>
    );
};

export default BlogCarousel;