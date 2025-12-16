import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import TeamCarouselMain from '../../sections/team/TeamCarouselMain';

const TeamCarousel: React.FC = () => {
    return (
        <>
            <BannerCommon title='Team' subtitle='Carousel' breadcrumb='Team Carousel' />
            <TeamCarouselMain />
        </>
    );
};

export default TeamCarousel;