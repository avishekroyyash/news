"use client"
import { authClient } from '@/lib/auth-client';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
    
    const handleGoogle =async () =>{
         const data = await authClient.signIn.social({
    provider: "google",
  });
    }

     const handleGithub =async () =>{
        const data = await authClient.signIn.social({
        provider: "github"
    })
    }

    return (
        <div>
            <div className='font-bold text-2xl mb-3'>Login with</div>
            <h1 onClick={handleGoogle} className='flex justify-center items-center gap-2 border-1 p-2 mb-2'> <FaGoogle /> Login with Google</h1>
            <h1 onClick={handleGithub} className='flex justify-center items-center gap-2 border-1 p-2'> <FaGithub /> Login with Github</h1>

        </div>
    );
};

export default RightSide;