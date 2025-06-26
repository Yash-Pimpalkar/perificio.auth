
import { redirect } from "next/navigation";
import EditPostForm from "@/components/Blogs/EditPostForm";
import { TPost } from "@/types";
import { auth } from "@/auth";

const getPost = async (id: string): Promise<TPost | null> => {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, {
      cache: "no-store",
    });

    if (res.ok) {
      const post = await res.json();
      return post;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};


interface PageProps {
  params: { id: string };
}

export default async function EditPost({ params }: PageProps) {
  const session = await auth();

  if (!session || session.user?.role !== "ADMIN") {
    redirect("/sign-in");
  }

  const post: TPost | null = await getPost(params.id);

  return <>{post ? <EditPostForm post={post} /> : <div>Invalid Post</div>}</>;
}