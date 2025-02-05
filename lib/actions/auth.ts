"use server";

import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";

import { signIn } from "@/auth";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error: string | any) {
    console.error(error, "Erro no login do usuário");
    return { success: false, error: "Erro no login do usuário" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const { fullName, email, universityId, password, universityCard } = params;

  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, error: "Esse usuário já existe" };
  }

  const hasshedPassword = await hash(password, 10);

  try {
    await db.insert(users).values({
      fullName,
      email,
      universityId,
      password: hasshedPassword,
      universityCard,
    });

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error: string | any) {
    console.error(error, "Erro no cadastro do usuário");
    return { success: false, error: "Erro no cadastro do usuário" };
  }
};
