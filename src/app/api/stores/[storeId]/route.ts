import { NextResponse } from "next/server";
import { stores } from "../store_data";

export async function GET(
    request: Request,   // Request object
    { params }: { params : { storeId: string } }
) {
    const storeId = parseInt(params.storeId); 
    const store = stores.find((p) => p.id === storeId);

    if (!store) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(store);
}