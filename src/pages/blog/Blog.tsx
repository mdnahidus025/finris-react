import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import BlogMain from '../../sections/blog/BlogMain';

const Blog: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Blogs' breadcrumb='Our Blogs' />
            <BlogMain />
        </>
    );
};

export default Blog;