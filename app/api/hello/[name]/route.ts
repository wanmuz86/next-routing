import { NextRequest, NextResponse } from "next/server";

//
export const GET = async (request:NextRequest, {params}:
    {
        params:{name:string}
    }) : Promise<NextResponse> => {
    const {name} = params;
    return NextResponse.json({message:`Hello ${name}`});
};