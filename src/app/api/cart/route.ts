import { addToCart, cartTable, db } from "@/lib/drizzle";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const user_id = "s123213231123123123ssqad";

  const req: addToCart = await request.json();

  try {
    if (req) {
      const res = await db
        .insert(cartTable)
        .values({
          user_id: user_id,
          product_id: req.product_id,
          product_name: req.product_name,
          quantity: req.quantity,
          image: req.image,
          price: req.price,
          subcat: req.subcat,
          totalprice: req.totalprice,
        })
        .returning();
      return NextResponse.json(
        { Message: "Data added to DB" },
        { status: 200 }
      );
    } else {
      throw new Error("Failed to insert Data");
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        Message: "Something went wrong",
      },
      { status: 400 }
    );
  }
};
