import React from 'react'
import PostCard from '../_components/post_card/postCard';
// import { Post } from '../_types/post';
import { getPosts } from '../_lib/data';

// const getData = async () : Promise<Array<Post>>=> {
//     const res = await fetch("http://localhost:3000/api/posts");
//     if (!res.ok){
//         throw new Error("Something is wrong")
//     }
//     return res.json();
// }

const Post = async () => {
// const posts = await getData();
const posts = await getPosts();
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
