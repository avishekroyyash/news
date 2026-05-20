"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userimg from '@/assets/user.png'
import Navlink from './Navlink';
import { signOut, useSession } from '@/lib/auth-client';

const Navber = () => {
    const {data,isPending} = useSession();
    // console.log(data,'this is data');
    // console.log(isPending,'this is ispending')
    const user = data?.user ;
    // console.log(user,'this is user')
    return (
        <div className='flex justify-between items-center p-5 container mx-auto'>
          <div></div>
         <div className='flex justify-between items-center gap-3'>
               <Navlink href={'/'}>Home</Navlink>
             <Navlink href={'/about'}>About</Navlink>
             <Navlink href={'/carrer'}>Carrer</Navlink>
         </div>
       { isPending ? (<span className="loading loading-dots loading-xl"></span>) :
        user ? (  <div className='flex justify-between items-center gap-3'>
             <h1 className='font-bold text-green-800'>welcome {user.name}</h1>
              <Image src={userimg} alt='user' width={50} height={50}/> 
         <button onClick={()=>signOut()} className='btn btn-success'>Logout</button>
        </div>) : ( <Link href={'/login'}> <button className='btn btn-primary'>Login</button></Link> )
       }
      
        

        </div>
    );
};

export default Navber;