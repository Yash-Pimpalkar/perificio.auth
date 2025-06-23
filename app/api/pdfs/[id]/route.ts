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
    const existingPdf = await prisma.pdf.findUnique({
      where: { id: params.id },
    });

    if (!existingPdf) {
      return NextResponse.json({ error: "PDF not found" }, { status: 404 });
    }

    // Optional: Only allow uploader to delete their PDF
    // if (existingPdf.uploaderEmail !== session.user.email) {
    //   return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    // }

    await prisma.pdf.delete({ where: { id: params.id } });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ error: "Error deleting PDF" }, { status: 500 });
  }
}
