"use server"
import { signIn,signOut } from "@/auth"
import { revalidatePath } from "next/cache"
import { prisma } from "@/db"
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";


export const  login = async (provider:string )=>{
    await signIn(provider, {
       redirectTo:"/",
    })
    revalidatePath("/")
}

export const  logout = async ()=>{
    await signOut({
       redirectTo:"/",
    })
    revalidatePath("/")
}


// app/actions/auth.ts


const getUserByEmail = async (email: string) => {
  try {
    return await prisma.user.findUnique({ where: { email } });
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const loginWithCreds = async (formData: FormData): Promise<void> => {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    redirect("/sign-in?error=Invalid+input+format");
    // Throw or redirect — do NOT return objects from server actions used in forms
    throw new Error("Invalid email or password.");
  }

  const existingUser = await getUserByEmail(email);
  console.log("User found:", existingUser);

  try {
    await signIn("credentials", {
      email,
      password,
      role: "USER",
      redirectTo: "/",
    });
  } catch (error: any) {
    if (error instanceof AuthError) {
      console.error("Auth Error:", error.type);
      redirect("/sign-in?error=Invalid+credentials");
      throw new Error("Invalid credentials");
    }
    console.log(error)
    throw error;
  }
 
  revalidatePath("/");
};
