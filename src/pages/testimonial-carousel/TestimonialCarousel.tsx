import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import TestimonialCarouselMain from '../../sections/testimonial/TestimonialCarouselMain';

const TestimonialCarousel: React.FC = () => {
    return (
        <>
            <BannerCommon title='Testimonial' subtitle='Carousel' breadcrumb='Testimonial Carousel' />
            <TestimonialCarouselMain />
        </>
    );
};

export default TestimonialCarousel;