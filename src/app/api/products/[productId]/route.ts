import { NextRequest, NextResponse } from "next/server";
import { product_data } from "../product_data";

export async function GET(
    request: NextRequest,   // Request object
    { params }: { params : Promise<{ productId: string }> } // Uses object destructuring to extract the params object, which contains the productId as a string
) {
    const { productId: productIdStr  } = await params;  // Extracts the productId from the params object
    const productId = parseInt(productIdStr);  // Converts the productId string to a number
    const product = product_data.find((p) => p.id === productId); // Finds the product with the given ID in the product_data array

    if (!product) { // If the product is not found, returns a 404 Not Found response with an error message in JSON format
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
}



