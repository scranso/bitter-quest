import { NextResponse } from "next/server";
import { product_data } from "../product_data";

export async function GET(
    request: Request,
    { params }: { params : { productId: string } }
) {
    const productId = parseInt(params.productId); 
    const product = product_data.find((p) => p.id === productId);

    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product_data);
}