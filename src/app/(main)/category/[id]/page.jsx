import LeftSide from '@/component/HomeCom/LeftSide';
import NewsTem from '@/component/HomeCom/NewsTem';
import RightSide from '@/component/HomeCom/RightSide';
import { DataPromise, NewsPromise } from '@/lib/data';
import React from 'react';





const CategoryDetails = async({params}) => {

  const {id}= await params ;
  // console.log(id,'this is param')

   const CaterogyData = await DataPromise();
   const NewsData = await NewsPromise(id);
  //  console.log(NewsData,'this is out side the function ')

    return (
        <div>
              <div className="grid grid-cols-12 gap-3 container mx-auto  ">
        <div className=" col-span-3">
        <LeftSide CaterogyData={CaterogyData}  activeId={id}></LeftSide>
          </div>
         <div className="col-span-6  ">
              <h1 className='font-bold text-2xl mb-9 mt-3'> Dragon News Home</h1>
          <div>
            {
              NewsData.length === 0 ? <h1 className='font-bold text-3xl text-red-500 my-5 p-10'>There are not news</h1> :  
              NewsData.map((item,index) => <NewsTem item={item} key={index}></NewsTem>)
           
            }
           
          </div>
         </div>
          <div className=" col-span-3  ">
            <RightSide></RightSide>
          </div>
      </div>
        </div>
    );
};

export default CategoryDetails;