import BreakingNews from '@/component/BreakingNews';
import Header from '@/component/Header';
import Navber from '@/component/Navber';
import React from 'react';

const MainLayout = ({children}) => {
    return (
        <>
            <Header></Header>
            <BreakingNews></BreakingNews>
             <Navber></Navber>
            {children}
        </>
    );
};

export default MainLayout;