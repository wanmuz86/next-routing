import { NextResponse,NextRequest } from "next/server";
import { Post } from '@/app/_lib/models';

export const GET = async (request:NextRequest, {params}:{
    params : {
        slug:string
    }
})=>{
    const {slug} = params;
    try {
        const post  = await Post.findOne({ where: { slug: slug } });
        return NextResponse.json(post);
    }
    catch (err)
    {
        console.log(err);
        throw new Error("Failed to fetch post!")
    }
}