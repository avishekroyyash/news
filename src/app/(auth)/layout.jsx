import Navber from '@/component/Navber';
import React from 'react';
import { YashMonSerat } from '../layout';

const AuthLayout = ({children}) => {
    return (
        <div className={`${YashMonSerat.className}`}>
           <Navber></Navber> 
           {children}
        </div>
    );
};

export default AuthLayout;