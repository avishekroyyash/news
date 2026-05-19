import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewsTem = ({item}) => {


    return (
        <div>

       <div className="card bg-base-100 w-full shadow-sm mb-5 border-2">
  <figure>
    <Image
      src={item.image_url}
      alt="newsimg" 
      width={650}
      height={250}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.title}</h2>
    <p className='line-clamp-3'>{item.details}</p>
    <div className="card-actions justify-end">
      <Link href={`/news/${item._id}`} ><button className="btn btn-primary">See details</button></Link>
    </div>
  </div>
</div>
 
        </div>
    );
};

export default NewsTem;