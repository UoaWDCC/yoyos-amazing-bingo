"use server";

import "server-only";

import { db } from "@/db/connection";
import { activitiesTable } from "@/db/schema";
import { getAllActivitiesService } from "@/services/getAllActivitiesService";

export async function getAllActivitiesAction() {
  return getAllActivitiesService();
}
