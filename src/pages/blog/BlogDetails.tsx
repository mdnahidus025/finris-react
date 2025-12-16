import React from 'react'; 
import BannerCommon from '../../sections/common/BannerCommon'; 
import BlogDetailsMain from '../../sections/blog/BlogDetailsMain';
import BlogDetailsCarousel from '../../sections/blog/BlogDetailsCarousel';

const BlogDetails: React.FC = () => {
    return (
        <>
            <BannerCommon title='Blog' subtitle='Details' breadcrumb='Blog Details' />
            <BlogDetailsMain />
            <BlogDetailsCarousel />
        </>
    );
};

export default BlogDetails;