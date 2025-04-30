"use server";

import "server-only";

import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth";
import { getTeamByCode } from "@/services/old/teamServices";

type SignInState = {
  error?: string;
  success?: boolean;
} | null;

type Auth = {
  error?: string;
  teamId: string;
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

  const team = await getTeamByCode(code.toString().toLowerCase());

  if (!team) {
    return {
      error: "Invalid team code",
    };
  }

  const session = await getSession();
  session.teamId = team.id;
  await session.save();

  return redirect("/");
}

/**
 * Get the Auth object from the cookie
 * @returns Auth object
 */
export async function auth(): Promise<Auth> {
  const session = await getSession();
  const teamId = session.teamId;

  if (!teamId) {
    return { teamId: "Unauthorized", error: "Unauthorized" };
  }

  return {
    teamId,
  };
}

/**
 * Protect the route
 * @returns Redirect to the code page if the user is not authenticated
 */
export async function protect() {
  try {
    await auth();
  } catch (error: unknown) {
    console.error("Unauthorized", error);
    return redirect("/code");
  }
}

/**
 * Sign out of the game
 * @returns Redirect to the code page
 */
export async function signOut() {
  const session = await getSession();
  session.destroy();

  return redirect("/code");
}
