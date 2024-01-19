import React from 'react'
import Image from 'next/image'
import { Post } from '@/app/_types/post'

interface PostProps  {
    post:Post
}
const PostCard: React.FC<PostProps> = ({post}) => {
  return (
    <div>
    <h2>{post.title}</h2>
    <p>{post.desc}</p>
    <Image src={post.img} width={300} height={400} alt={post.title}/> 


</div>
  )
}
export default PostCard;

