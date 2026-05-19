import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import user from '@/assets/user.png'
import Navlink from './Navlink';

const Navber = () => {
    return (
        <div className='flex justify-between items-center p-5 container mx-auto'>
          <div></div>
         <div className='flex justify-between items-center gap-3'>
               <Navlink href={'/'}>Home</Navlink>
             <Navlink href={'/about'}>About</Navlink>
             <Navlink href={'/carrer'}>Carrer</Navlink>
         </div>
       
        <div className='flex justify-between items-center gap-3'>
              <Image src={user} alt='user' width={50} height={50}/> 
         <Link href={'/login'}> <button className='btn btn-success'>Login</button></Link>
        </div>
        

        </div>
    );
};

export default Navber;