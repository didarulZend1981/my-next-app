export const getPosts = async()=>{
  const res = await fetch("https://api.vercel.app/blog");
  const data =await res.json();
  return data;
}


export const getDetailsPost = async(id)=>{
  const res =await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;

}

