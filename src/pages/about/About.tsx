import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import AboutUsThree from '../../sections/about/AboutUsThree';
import WhyChooseA from '../../sections/about/WhyChooseA';
import CounterA from '../../sections/about/CounterA';
import TestimonialsA from '../../sections/about/TestimonialsA';
import AwardsA from '../../sections/about/AwardsA';
import CtaCommon from '../../sections/common/CtaCommon';

const About: React.FC = () => {
    return (
        <>
            <BannerCommon title='About' subtitle='Us' breadcrumb='About Us' />
            <AboutUsThree />
            <WhyChooseA />
            <CounterA />
            <TestimonialsA />
            <AwardsA />
            <CtaCommon />
        </>

    );
};

export default About;