import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import DeleteButton from "./DeleteButton";

interface PdfCardProps {
  id: string;
  title: string;
  description?: string;
  pdfUrl: string;
  publicId: string;
  uploadedAt: string;
  uploaderEmail: string;
}

export default async function PdfCard({
  id,
  title,
  description,
  pdfUrl,
  publicId,
  uploadedAt,
  uploaderEmail,
}: PdfCardProps) {
  const session = await auth();
  const isEditable = session?.user?.email === uploaderEmail;

  const formattedDate = new Date(uploadedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const pdfThumbnail = `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/w_600,h_400,c_fill/pg_1/${publicId}.jpg`;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] w-full max-w-sm flex flex-col h-[400px]
       px-12 sm:px-6 lg:px-4">

      {/* Thumbnail from Cloudinary */}
      <div className="relative w-full h-48">
        <Image
          src={pdfThumbnail}
          alt={`Thumbnail for ${title}`}
          fill
          className="object-cover rounded-t-xl"
        />
        <div className="absolute top-3 right-3 bg-white/80 px-2 py-1 rounded-full text-xs font-semibold border border-gray-200">
          PDF
        </div>
      </div>

      {/* Text Section */}
      <div className="p-4 sm:p-6 text-left flex-1 overflow-hidden">
        <h3 className="text-lg sm:text-xl font-bold text-[#1D4ED8] mb-1 line-clamp-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          {formattedDate}
        </p>
        <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
          {description || "No description provided."}
        </p>
      </div>

      {/* Footer */}
      <div className="px-4 pb-5 pt-0 text-right flex justify-between items-center mt-auto">
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View PDF: ${title}`}
          className="text-blue-600 hover:underline font-semibold text-sm"
        >
          View PDF →
        </a>

        {isEditable && (
          <div className="flex items-center gap-3 text-sm font-semibold">
            <Link href={`/edit-pdf/${id}`} className="text-yellow-600 hover:underline">
              Edit
            </Link>
            <DeleteButton id={id} />
          </div>
        )}
      </div>
    </div>
  );
}
