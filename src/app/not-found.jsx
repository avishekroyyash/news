import Link from 'next/link';
import React from 'react';

const NotfoundPage = () => {
    return (
        <div>
          <div className='flex justify-center items-center flex-col p-50 gap-4'>
              <h1 className='font-bold text-6xl text-red-500'>This page is not found</h1>
              <Link href={'/'}> <button className='btn bg-red-300'>Home page</button></Link>
          </div>
        </div>
    );
};

export default NotfoundPage;
