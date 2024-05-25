import { PrismaClient, STATUS } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// GET method
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") as STATUS | null;

  try {
    let billboards;
    if (status) {
      billboards = await prisma.billboard.findMany({
        where: { status },
      });
    } else {
      billboards = await prisma.billboard.findMany();
    }
    return NextResponse.json(billboards);
  } catch (error) {
    return NextResponse.json(
      { error: "Error in getting Data" },
      { status: 500 }
    );
  }
}

export async function POST(request: any) {
  const { id, status, changed } = await request.json();

  const updateData: { status: STATUS; changed?: boolean } = {
    status: STATUS[status as keyof typeof STATUS],
  };

  if (changed !== undefined) {
    updateData.changed = changed;
  }

  try {
    const updatedBillboard = await prisma.billboard.update({
      where: { id },
      data: updateData,
    });
    return NextResponse.json(updatedBillboard);
  } catch (error) {
    return NextResponse.json(
      { error: "Error updating billboard status" },
      { status: 500 }
    );
  }
}
