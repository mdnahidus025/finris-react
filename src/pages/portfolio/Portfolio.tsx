import React from 'react'; 
import BannerCommon from '../../sections/common/BannerCommon'; 
import PortfolioMain from '../../sections/portfolio/PortfolioMain';

const Portfolio: React.FC = () => {
    return (
        <>
            <BannerCommon title='Our' subtitle='Portfolio' breadcrumb='Our Portfolio' />
            <PortfolioMain />
        </>
    );
};

export default Portfolio;