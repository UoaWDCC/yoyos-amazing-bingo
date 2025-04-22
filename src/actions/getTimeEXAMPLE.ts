"use server";

export async function getTime() {
  console.log(`getTime() called at: ${new Date().toLocaleTimeString()}`);
  return `getTime() called at: ${new Date().toLocaleTimeString()}`;
}
