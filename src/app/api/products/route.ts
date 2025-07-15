import { product_data } from "./product_data";

export async function GET() {
    return Response.json(product_data);
}

