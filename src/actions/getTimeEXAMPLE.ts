"use server";

import "server-only";

/** Just an example server action to return the current server time */
export async function getTime() {
  console.log(`getTime() called at: ${new Date().toLocaleTimeString()}`);
  return `getTime() called at: ${new Date().toLocaleTimeString()}`;
}
