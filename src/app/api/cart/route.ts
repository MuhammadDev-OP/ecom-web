import { NextResponse, NextRequest } from "next/server";
import { db, cartTable } from "@/app/lib/drizzle"

import {v4 as uuid} from "uuid"
import { cookies } from "next/dist/client/components/headers";

export const GET = async (request: Request) => {
    try{
        const res = await db.select().from(cartTable)
        return NextResponse.json({ res })
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "something went wrong"})

    }

}

export const POST = async (request: Request) => {

    const req = await request.json()
    
    const uid = uuid();
    const listCookies = cookies();
    const user_id = cookies().get("user_id")?.value

    if (!user_id) {
        listCookies.set("user_id", uid)
    }

    try{
        const res = await db.insert(cartTable).values({
            product_id: req.product_id,
            quantity: 1,
            user_id: user_id as string
        }).returning();
        return NextResponse.json({ res })
    } catch (error) {

    }

}