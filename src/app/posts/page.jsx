import React from 'react';
import { getPosts } from '@/app/serviceApi.jsx/postApi';
import Link from 'next/link';



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
                <button className="bg-red-400 px-4 py-2"><Link href={`/posts/${id}`}>see Details</Link></button>

            </div>
             
          ))
        }
      </div>
    </div>
  );
};

export default page;