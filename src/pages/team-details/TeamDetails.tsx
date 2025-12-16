import React from 'react';
import BannerCommon from '../../sections/common/BannerCommon';
import TeamDetailsMain from '../../sections/team/TeamDetailsMain';

const TeamDetails: React.FC = () => {
    return (
        <>
            <BannerCommon title='Team' subtitle='Details' breadcrumb='Team Member' />
            <TeamDetailsMain />
        </>
    );
};

export default TeamDetails;