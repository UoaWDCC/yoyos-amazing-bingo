"use client";

import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

export default function TeamNameDisplay() {
  const { data: teamId } = useAuth();
  const isAdmin = teamId === "admin";
  const { data: team } = useGetTeam(!isAdmin && teamId ? teamId : null);
  const name = isAdmin ? "Admin" : (team?.name ?? "");
  return <span>{name}</span>;
}
