import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const visaCards = await prisma.visaCard.findMany();
    return NextResponse.json(visaCards);
  } catch (error) {
    return NextResponse.json(
      { error: "Error retrieving Visa Cards" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { cardNumber, cardHolderName, cvv, expirationDate, cardType } =
      await request.json();
    const newCard = await prisma.visaCard.create({
      data: {
        cardNumber,
        cardHolderName,
        cvv,
        expirationDate,
        cardType,
      },
    });
    return NextResponse.json(newCard);
  } catch (error) {
    return NextResponse.json(
      { error: "Error adding new Visa Card" },
      { status: 500 }
    );
  }
}
