// import { comments } from "./data";

// export async function GET() {
//     return Response.json(comments);
// }

// Not sure what this is for yet but afraid to scrap it for now


import { NextResponse } from "next/server";
import { store_data } from "./store_data";

export async function GET() {
    return NextResponse.json(store_data);
}