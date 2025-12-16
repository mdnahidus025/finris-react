import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import BlogListMain from '../../sections/blog/BlogListMain';

const BlogList: React.FC = () => {
    return (
        <>
            <BannerCommon title='Blog' subtitle='List' breadcrumb='Blog List' />
            <BlogListMain />
        </>
    );
};

export default BlogList;