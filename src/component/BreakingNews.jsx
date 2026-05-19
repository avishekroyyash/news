import { Span } from 'next/dist/trace';
import React from 'react';
import Marquee from 'react-fast-marquee';

const news = [
  {
    "title": "Iran to Unveil Strait of Hormuz Transit Toll Mechanism.      "
  },
  {
    "title": "Lebanon Says Israeli Strikes Kill 7 as Hezbollah Condemns Talks.     "
  },
  {
    "title": "Bangladesh Stresses Primary Healthcare, Cancer Prevention at Geneva Forum.    "
  },
  {
    "title": "China Vows Crackdown on Illegal Drone Flight System Tampering.     "
  },
  {
    "title": "White House Says Donald Trump and Xi Jinping Agreed on ‘Board of Trade’ at Summit.      "
  }
]

const BreakingNews = () => {
    return (
        <div className='flex justify-center items-center gap-5 bg-amber-300 container mx-auto p-3 rounded-xl'>
          <button className='btn btn-secondary'>Latest news</button>
         <Marquee pauseOnHover={true} speed={50}>
           {
                news.map((item,index) => <span key={index}>{item.title}</span> )
           }
         </Marquee>
        </div>
    );
};

export default BreakingNews;