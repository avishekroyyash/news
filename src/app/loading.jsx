import React from 'react';

const LoadingPage = () => {
    return (
        <div>
            <h1 className='font-bold text-3xl text-red-500 '>This is Global Loading</h1>
            <span className="loading loading-bars loading-xl text-red-600 p-10"></span>
        </div>
    );
};

export default LoadingPage;