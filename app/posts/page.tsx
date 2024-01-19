import React from 'react'
import PostCard from '../_components/post_card/postCard';
const getData = async () => {
    const res = await fetch("/api/posts");
    if (!res.ok){
        throw new Error("Something is wrong")
    }
    return res.json();
}
const Post = async () => {
    const posts = await getData();

   
  return (
  <div>
        {
            posts.map(val=>(
                <PostCard key={val.slug} post={val}/>  
            )
            )
        }
        </div>
  )
}
export default Post;
