import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import PortfolioDMain from '../../sections/portfolio/PortfolioDMain';

const PortfolioDetails: React.FC = () => {
    return (
        <>
            <BannerCommon title='Portfolio' subtitle='Details' breadcrumb='Portfolio Details' />
            <PortfolioDMain />
        </>
    );
};

export default PortfolioDetails;