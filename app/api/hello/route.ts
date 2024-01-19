import {NextRequest, NextResponse} from "next/server"

export async function GET() {
    return  NextResponse.json({"message":"Hello World"})
}

export async function POST( request:NextRequest) {
    const info = await  request.json();
    return NextResponse.json({"message":`Info received from ${info.name} and ${info.age} years old`})
}