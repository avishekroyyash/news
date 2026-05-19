import Link from 'next/link';
import React from 'react';

const LeftSide = ({CaterogyData , activeId}) => {
    return (
        <div>
               <h1 className="font-bold text-2xl p-3 "> All Caterogy</h1>
         <div className="flex flex-col gap-3 mt-5">
          {
            CaterogyData.map((item,index) => <div key={index}>
             <Link href={`/category/${item.category_id}`} > <h1 className={` ${activeId == item.category_id && 'bg-green-500'} bg-gray-200 font-medium p-3 rounded-md text-xl`}>
               {item.category_name}
                </h1>
                </Link>                                                      
            </div>)
          }
         </div>
        </div>
    );
};

export default LeftSide;