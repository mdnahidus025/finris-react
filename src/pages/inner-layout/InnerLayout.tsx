import React from 'react';
import HeaderCommon from '../../sections/common/HeaderCommon';
import FooterCommon from '../../sections/common/FooterCommon';
import StrickyHeaderCommon from '../../sections/common/StrickyHeaderCommon';
import { Outlet } from 'react-router';

const InnerLayout: React.FC = () => {
    return (
        <div className="page-wrapper">
            <HeaderCommon />
            <Outlet />
            <FooterCommon />
            <StrickyHeaderCommon />
        </div>
    );
};

export default InnerLayout;