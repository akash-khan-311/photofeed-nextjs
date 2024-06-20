import { getPhotoById } from "@/lib/image-data"
import { NextResponse } from "next/server"

export const GET = async (request,{ params }) => {
    const { id } = params
    const data = await getPhotoById(id)
    return NextResponse.json(data)
}