import { TPdf } from '@/types';
import React from 'react'

const page = async () => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/pdfs`, { cache: 'no-store' });
  const pdfs: TPdf[] = await res.json();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">All PDFs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pdfs?.map((pdf) => (
          <div key={pdf.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-bold">{pdf.title}</h3>
            <p className="text-sm text-gray-500">
              {new Date(pdf?.uploadedAt || "").toLocaleDateString()}
            </p>
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
    </div>
  )
}

export default page