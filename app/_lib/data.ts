import {Post} from '@/app/_lib/models'
import { revalidatePath } from 'next/cache';

export const getPosts = async () => {
    try {
      const posts = await Post.findAll();
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
   };
   

export const addPost = async (prevState, formData)=> {
    
    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        const newPost = new Post(
            {
                title,
                desc,
                slug,
                userId
            }
        );
        await newPost.save();
        console.log("Saved to db");
        /// RevalidatePath -> Clear/Purge the cache 

        // Impacted if I get the posts directly from data.ts (2nd way)
        revalidatePath("/posts")
        // Impacted if I get the posts through the route handler
        revalidatePath("/api/posts")

    } catch (err){
        console.log(err);
        return {error:"Something is wrong"}
    }

}