export const getPosts = async()=>{
  const res = await fetch("https://api.vercel.app/blog");
  const data =await res.json();
  return data;
}

