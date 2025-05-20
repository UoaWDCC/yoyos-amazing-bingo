"use server";

import "server-only";

import { getAllActivitiesService } from "@/services/getAllActivitiesService";

export async function getAllActivitiesAction() {
  return getAllActivitiesService();
}
