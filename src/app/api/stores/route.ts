// import { store_data } from "./store_data";

// export async function GET() {
//     return Response.json(store_data);
// }

import { NextResponse } from 'next/server';
import { stores } from './store_data';

export async function GET() {
    return NextResponse.json(stores);
}