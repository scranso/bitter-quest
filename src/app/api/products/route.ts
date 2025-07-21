// import { product_data } from "./product_data";

// export async function GET() {
//     return Response.json(product_data);
// }

import { NextResponse } from "next/server";
import { product_data } from "./product_data";

export async function GET() {
    return NextResponse.json(product_data);
}