import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import TeamMain from '../../sections/team/TeamMain';

const Team: React.FC = () => {
    return (
        <>
            <BannerCommon title='Team' subtitle='Member' breadcrumb='Team Member' />
            <TeamMain />
        </>
    );
};

export default Team;