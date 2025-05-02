"use server";

import "server-only";

import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth";
import env from "@/lib/env";
import { getTeamByCode } from "@/services/getTeamByCodeService";

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
  formData: FormData,
): Promise<SignInState> {
  try {
    const code = formData.get("code");
    if (!code) {
      return { error: "Invalid team code" };
    }

    // Get teamId from code
    let teamId;
    if (code === env.ADMIN_CODE) {
      // Admin
      teamId = env.ADMIN_ID;
    } else {
      const team = await getTeamByCode(code.toString()); // Normal teams
      if (!team) {
        return { error: "Invalid team code" };
      }
      teamId = team.id;
    }

    const session = await getSession();
    session.teamId = teamId;
    await session.save();
    return { success: true };
  } catch (error) {
    console.log("Error signing in", error);
    return { error: "Invalid team code" };
  }
}

/**
 * Get the Auth object from the cookie
 * @returns Auth object
 */
export async function auth(): Promise<Auth> {
  try {
    const { teamId } = await getSession();
    return { teamId: teamId ?? "", error: "Not authenticated" };
  } catch (error) {
    console.log("Error getting auth", error);
    return { teamId: "", error: "Not authenticated" };
  }
}

/**
 * Sign out of the game
 * @returns Redirect to the code page
 */
export async function signOut() {
  const session = await getSession();
  session.destroy();
  return redirect("/");
}
