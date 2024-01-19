import React from 'react'
import Image from 'next/image'

export const PostCard = ({post}) => {
  return (
    <div>
    <h2>{post.title}</h2>
    <p>{post.desc}</p>
    <Image src={post.img} width={300} height={400} alt={post.title}/> 


</div>
  )
}
export default PostCard;

