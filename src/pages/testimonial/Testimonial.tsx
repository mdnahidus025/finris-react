import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import TestimonialMain from '../../sections/testimonial/TestimonialMain';

const Testimonial: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Testimonials' breadcrumb='Our Testimonials' />
            <TestimonialMain />
        </>
    );
};

export default Testimonial;