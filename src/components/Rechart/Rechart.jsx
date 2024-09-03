import React from 'react';
import ProgressChart from '../ProgressChart/ProgressChart';
import MembershipGrowthChart from '../MembershipGrowthChart/MembershipGrowthChart';

const Rechart = () => {
    return (
        <div className='grid grid-cols-2 max-md:grid-cols-1'>
            <ProgressChart></ProgressChart>
            <MembershipGrowthChart></MembershipGrowthChart>
        </div>
    );
};

export default Rechart;