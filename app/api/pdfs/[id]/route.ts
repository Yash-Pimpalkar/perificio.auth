import { auth } from "@/auth";
import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const pdf = await prisma.pdf.findUnique({ where: { id } });

    if (!pdf) {
      return NextResponse.json({ message: "PDF not found" }, { status: 404 });
    }

    return NextResponse.json(pdf);
  } catch (error) {
    console.error("Fetch error:", error);
    return NextResponse.json({ message: "Error fetching PDF" }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const session = await auth();
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const pdf = await prisma.pdf.delete({ where: { id: params.id } });
    return NextResponse.json(pdf);
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ message: "Error deleting PDF" }, { status: 500 });
  }
}
