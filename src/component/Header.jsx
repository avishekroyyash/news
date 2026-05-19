import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from "date-fns";

const Header = () => {
    return (
        <div>
         <header className='text-center space-y-3 my-6'>
            <Image
            src = {logo}
            alt = 'the dragon news'
            width = {300}
            height = {300} 
            className='mx-auto'>
         </Image>
         <p>Journalism Without Fear or Favour</p>
         <p>{format(new Date(),"EEEE,LLLL dd,yyyy")}</p>
         </header>
        </div>
    );
};

export default Header;