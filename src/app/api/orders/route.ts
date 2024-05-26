import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { billboards }: { billboards: number[] } = await req.json();

    // Fetch the billboards from the database
    const billboardData = await prisma.billboard.findMany({
      where: {
        id: { in: billboards },
      },
    });

    const totalSum = billboardData.reduce((acc, curr) => acc + Number(curr.price.replace(/,/g, "")), 0);

    const order = await prisma.order.create({
      data: {
        billboards: {
          connect: billboards.map((id) => ({ id })),
        },
        totalSum: totalSum.toString(),
        quantity: billboards.length,
      },
      include: {
        billboards: true,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    return NextResponse.json({ error: "Failed to create order", details: error }, { status: 400 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        billboards: true,
      },
    });
    return NextResponse.json(orders);
  } catch (error) {
    return NextResponse.json({ error: "Failed to retrieve orders", details: error }, { status: 400 });
  }
}
