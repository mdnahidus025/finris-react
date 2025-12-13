import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import BannerCommon from '../../sections/common/BannerCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import TeamCarouselMain from '../../sections/team/TeamCarouselMain';

const TeamCarousel: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <BannerCommon title='Team' subtitle='Carousel' breadcrumb='Team Carousel' />
            <TeamCarouselMain />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default TeamCarousel;