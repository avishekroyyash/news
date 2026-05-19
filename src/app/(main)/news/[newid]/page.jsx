import { NewsDetailsPromise } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export async function generateMetadata({ params }) {
  const {newid} = await params
   const newsDetails = await  NewsDetailsPromise(newid);
 
  return {
    title: newsDetails.title,
    description:newsDetails.details ,
  }
}
 

const DetailsPage = async ({params}) => {
    const {newid} = await params ;
    // console.log(newid,'this is param')
    const newsDetails = await  NewsDetailsPromise(newid);
    // console.log(newsDetails,'this is newsDetails data')
    return (
        <div>
          <div className="card bg-base-100 w-full shadow-sm">
  <figure>
    <Image
      src={newsDetails.image_url}
      alt="newsDetails.author?.name" 
      width={700}
      height={500}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title text-green-500">{newsDetails.author?.name}</h2>
     <h2 className="card-title font-bold text-3xl">{newsDetails.title}</h2>
    <p>{newsDetails.details}</p>
    <div className="card-actions justify-end">
      <Link href={`/category/${newsDetails.category_id}`} ><button className="btn btn-primary">Go to main page</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default DetailsPage;