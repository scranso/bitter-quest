import { store_data } from "./store_data";

export async function GET() {
    return Response.json(store_data);
}

