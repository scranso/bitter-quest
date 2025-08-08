// import { NextResponse } from "next/server";
// import { stores } from "../store_data";

// export async function GET(
//     request: Request,   // Request object 
//     { params }: { params : { storeId: string } } // URL parameters 
// ) {
//     const storeId = parseInt(params.storeId); // Parse storeId from the URL parameters to an integer
//     const store = stores.find((p) => p.id === storeId); // Search for store with the given storeId in the store_data array to find a store object whose id matches the parsed storeID

//     if (!store) { // block check if store is found
//         return NextResponse.json({ error: "Product not found" }, { status: 404 }); // Return 404 Not Found if store not found
//     }

//     return NextResponse.json(store);
// }

// import { NextResponse, NextRequest } from "next/server";
// import { stores } from "../store_data";

// export async function GET(
//     request: NextRequest,
//     { params }: { params: Promise<{ storeId: string }> }
// ) {
//     const { storeId:productIdStr } = await params;
//     const productId = parseInt(productIdStr); 
//     const store = stores.find((p) => p.id === productId);

//     if (!store) {
//         return NextResponse.json({ error: "Product not found" }, { status: 404 });
//     }

//     return NextResponse.json(store);
// }


import { NextResponse, NextRequest } from "next/server";
import { stores } from "../store_data";

export async function GET(
    request: NextRequest,   
    { params }: { params: Promise<{ storeId: string }> } 
) {
    const { storeId: storeIdStr } = await params;
    const storeId = parseInt(storeIdStr); 
    const store = stores.find((p) => p.id === storeId); 

    if (!store) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 }); 
    }

    return NextResponse.json(store);
}