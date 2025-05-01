"use server";

import "server-only";

import { redirect } from "next/navigation";

import { getSession } from "@/lib/auth";
import env from "@/lib/env";

type SignInState = {
  error?: string;
  success?: boolean;
} | null;

type Auth = {
  error?: string;
  teamId: string | null;
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

  let teamId;
  if (code === env.ADMIN_CODE) {
    teamId = env.ADMIN_ID;
  } else {
    // TODO: remove dummy data
    teamId = "test";

    // const team = await getTeamByCode(code.toString());
    // if (!team) {
    //   return {
    //     error: "Invalid team code",
    //   };
    // }
    // teamId = team.id;
  }

  const session = await getSession();
  session.teamId = teamId;
  await session.save();

  return redirect("/board");
}

/**
 * Get the Auth object from the cookie
 * @returns Auth object
 */
export async function auth(): Promise<Auth> {
  const session = await getSession();
  const teamId = session.teamId;

  if (!teamId) {
    return { teamId: null, error: "Unauthorized" };
  }

  return {
    teamId,
  };
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
