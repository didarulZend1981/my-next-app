import { getDetailsPost } from '@/app/serviceApi.jsx/postApi';
import React from 'react';

const PostDetailsPage =async ({params}) => {
  const {title,completed,id}=await getDetailsPost(params.id)
  return (
    <div>
      tittle:{title}
    </div>
  );
};

export default PostDetailsPage;