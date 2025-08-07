import { NextResponse } from "next/server";
import { stores } from "../store_data";

export async function GET(
    request: Request,   // Request object
    { params }: { params : { storeId: string } } // URL parameters 
) {
    const storeId = parseInt(params.storeId); // Parse storeId from the URL parameters 
    const store = stores.find((p) => p.id === storeId); // Find the store with the given ID

    if (!store) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 }); // Return 404 Not Found if store not found
    }

    return NextResponse.json(store);
}