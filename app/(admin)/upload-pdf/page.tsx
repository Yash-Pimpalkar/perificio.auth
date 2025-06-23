"use client";

import { useState } from "react";
import { CldUploadButton, CloudinaryUploadWidgetResults } from "next-cloudinary";
import toast from "react-hot-toast";
import Link from "next/link";

export default function CreatePdfForm() {
  const [title, setTitle] = useState("");
  const [pdfUrl, setPdfUrl] = useState("");
  const [publicId, setPublicId] = useState("");

  const handlePdfUpload = (result: CloudinaryUploadWidgetResults) => {
    const info = result.info as { secure_url?: string; public_id?: string };

    if (info.secure_url && info.public_id) {
      setPdfUrl(info.secure_url);
      setPublicId(info.public_id);
      toast.success("PDF uploaded successfully");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !pdfUrl) {
      toast.error("Title and PDF file are required.");
      return;
    }

    const res = await fetch("/api/pdfs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, pdfUrl, publicId }),
    });

    if (res.ok) {
      toast.success("PDF uploaded successfully!");
      setTitle("");
      setPdfUrl("");
      setPublicId("");
    } else {
      toast.error("Failed to upload PDF");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 space-y-4">
      <h2 className="text-2xl font-bold text-center">Upload PDF</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Enter Title"
          className="w-full border rounded p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      <CldUploadButton
  uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_FILE_PRESET}
  options={{ resourceType: "raw" }} // <-- Make sure this is present
  onSuccess={handlePdfUpload}
  className="w-full border-dashed border-2 rounded p-4 text-center cursor-pointer"
>
  {pdfUrl ? (
    <p className="text-green-600 font-medium">PDF Uploaded ✅</p>
  ) : (
    "Click here to upload a PDF"
  )}
</CldUploadButton>


        {pdfUrl && (
          <div className="text-blue-600 underline">
            <Link href={pdfUrl} target="_blank">View Uploaded PDF</Link>
          </div>
        )}

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
