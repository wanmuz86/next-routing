import { NextRequest,NextResponse } from "next/server";
import {connectToDb} from '@/app/_lib/utils';

export const GET = async (request:NextRequest) => {

    try {
        connectToDb()
        return NextResponse.json({"message":"Connection ok"})
    } catch (err){
        console.log(err);
        throw new Error("Failed to connect to DB");
    }
}