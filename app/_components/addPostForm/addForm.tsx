"use client"
import React from 'react'
import { useFormState } from 'react-dom'
import { addPost } from '@/app/_lib/data';

export const AddPostForm = () => {
    
    // This for, will be linked to the method addPost, and it's initial state is undefined
    // The method addPost will be created inside lib/data.ts
    const [state, formAction] = useFormState(addPost, undefined);
  return (
    <form action={formAction}>
    
        <input type="hidden" name="userId" value={1} />
        <input type="text" name="title" placeholder='Enter title' />
        <input type="text" name="slug" placeholder='Enter slug' />
        <input type="text" name="img" placeholder='Image URL' />
        <textarea name="desc" id="" cols={30} rows={10} ></textarea>
        <button>Add</button>
        {state?.error}
    </form>
  )
}
