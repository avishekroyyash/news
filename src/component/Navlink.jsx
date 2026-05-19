'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const pathname = usePathname();
    //console.log(pathname,'this is a path name ')
    const isActive =  pathname === href ;
    return (
        <div>
            
            <Link href={href} className={`${isActive ? 'bg-amber-500 p-2 rounded-2xl' : ''}`} >{children}</Link> 
        </div>
    );
};

export default Navlink;