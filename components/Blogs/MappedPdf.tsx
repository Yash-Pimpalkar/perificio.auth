"use client";

import { TPdf } from "@/types";
import { useEffect, useState } from "react";

export default function PdfGalleryClient() {
  const [pdfs, setPdfs] = useState<TPdf[] | null>(null);

const getPdfs = async (): Promise<TPdf[] | null> => {
  try {
    const res = await fetch("/api/pdfs", { cache: "no-store" });
    if (res.ok) return res.json();
  } catch (error) {
    console.error("Failed to fetch PDFs:", error);
  }
  return null;
};

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPdfs();
      setPdfs(data);
    };
    fetchData();
  }, []);


  if (!pdfs) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pdfs.map((pdf) => (
        <div key={pdf.id} className="bg-white p-4 rounded shadow">
          <h3 className="font-bold">{pdf.title}</h3>
          <p className="text-sm text-gray-500">{new Date(pdf?.uploadedAt || "").toLocaleDateString()}</p>
          <a
            href={pdf.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline block mt-2"
          >
            View PDF
          </a>
        </div>
      ))}
    </div>
  );
}
