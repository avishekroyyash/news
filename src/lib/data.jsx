export const DataPromise = async ()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const Data = await res.json();
 // console.log(Data.data.news_category,'this is data');
  return Data.data.news_category ;
}
export const NewsPromise = async (id)=>{
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`)
  const Data = await res.json();
  // console.log(Data.data,'this is data');
  return Data.data;
}