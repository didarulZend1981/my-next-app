import React from 'react';
const getDetailsPost = async(id)=>{
  const res =await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;

}
const PostDetailsPage =async ({params}) => {
  const {title,completed,id}=await getDetailsPost(params.id)
  return (
    <div>
      tittle:{title}
    </div>
  );
};

export default PostDetailsPage;