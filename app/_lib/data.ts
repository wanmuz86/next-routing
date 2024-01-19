import {Post} from '@/app/_lib/models'

export const getPosts = async () => {
    try {
      const posts = await Post.findAll();
      return posts;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to fetch posts!");
    }
   };
   