// import { PrismaClient } from "@prisma/client";
// import { NextResponse } from "next/server";

// const prisma = new PrismaClient();

// // PATCH method to update billboard status
// export async function PATCH(req:any) {
//     const { id } = req.params;
//     const { status } = req.body;
  
//     try {
//       await prisma.billboard.update({
//         where: { id: parseInt(id, 10) },
//         data: { status },
//       });
//       return NextResponse.json({ message: "Billboard status updated successfully" });
//     } catch (error) {
//       console.error("Error updating billboard status:", error);
//       return NextResponse.json({ error: "Error updating billboard status" }, { status: 500 });
//     }
//   }