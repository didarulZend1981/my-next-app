import React from 'react';

const getPosts = async()=>{
  const res = await fetch("https://api.vercel.app/blog");
  const data =await res.json();
  return data;
}
const page = async() => {
  const postData=await getPosts();
  // console.log(postData);
  return (
    <div className="h-screen">
      <h6>All Posts</h6>
      <div className="grid grid-cols-4 gap-6">
        {
          postData?.slice(0,15)?.map(({id,title,content})=>(
            <div key={id} className="border-2 p-6">
                <h6>{title}</h6>
                <h6>{content}</h6>

            </div>
             
          ))
        }
      </div>
    </div>
  );
};

export default page;