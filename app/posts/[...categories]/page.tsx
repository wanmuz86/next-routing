import React from 'react'

export default function CategoryPosts(
    {params}:{
        params:{
            categories:string[]
        }
    }){
        const random = Math.floor(Math.random() * 2)
        if (random === 1){
            throw new Error("Error loading categories");
        }

  return (
    <div>
        <h1>Category Posts</h1>
        <p>
        Categories: {params.categories.join(', ')}    
        </p>
    </div>
  )
  }
