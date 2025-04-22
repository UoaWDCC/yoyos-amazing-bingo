"use server";

import "server-only";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getTeamByCode } from "@/services/auth";

type SignInState = {
  error?: string;
  success?: boolean;
} | null;

type Auth = {
  error?: string;
  teamId?: string;
};

/**
 * Sign in to the game
 * This action is used to sign in to the game, it will redirect to the game page if the teamId is set and valid
 * @param _prevState - Previous state
 * @param formData - Form data
 * @returns Sign in state
 */
export async function signIn(
  _prevState: SignInState,
  formData: FormData,
): Promise<SignInState> {
  const code = formData.get("code");

  if (!code) {
    return {
      error: "Please enter a team code",
    };
  }

  const team = await getTeamByCode(code as string);

  if (!team) {
    return {
      error: "Invalid team code",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("teamId", team.id);

  return redirect("/");
}

/**
 * Get the Auth object from the cookie
 * @returns Auth object
 */
export async function auth(): Promise<Auth> {
  const cookieStore = await cookies();
  const teamId = cookieStore.get("teamId");

  if (!teamId) {
    return { error: "Unauthorized" };
  }

  return {
    teamId: teamId.value,
  };
}

/**
 * Protect the route
 * @returns Redirect to the code page if the user is not authenticated
 */
export async function protect() {
  const { error } = await auth();

  if (error) {
    return redirect("/code");
  }
}

/**
 * Sign out of the game
 * @returns Redirect to the code page
 */
export async function signOut() {
  const cookieStore = await cookies();
  cookieStore.delete("teamId");

  return redirect("/code");
}
