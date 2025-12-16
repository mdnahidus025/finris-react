import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import CtaCommon from '../../sections/common/CtaCommon';
import SearchEngineMain from '../../sections/search-engine/SearchEngineMain';

const SearchEngine: React.FC = () => {
    return (
        <>
            <BannerCommon title='Search Engine' subtitle='Optimization' breadcrumb='Services' breadcrumbLink='/services' breadcrumb2='Search Engine Optimization' />
            <SearchEngineMain />
            <CtaCommon />
        </>
    );
};

export default SearchEngine;