import { NextRequest, NextResponse } from "next/server";

export const GET = async (request:NextRequest) => {

    try {
        const posts = await Post.findAll();
        return NextResponse.json(posts);
    }
    catch (err){
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
}