/**
 * Script to reset team progression (activity completions) in the database.
 *
 * Usage:
 *   pnpm db:reset                        — resets all teams
 *   pnpm db:reset <teamId> [teamId...]   — resets only the specified teams
 *
 * Args:
 *   teamId  Optional. One or more team IDs (space-separated) to reset.
 *           Unknown IDs are ignored with a warning.
 *           If all provided IDs are invalid, the script aborts.
 */

import { ask } from "stdio";

import { resetTeamProgress } from "@/services/resetTeamProgressService";
import { teamIds as allTeamIds } from "@/db/data/teamsData";

async function main() {
  const selectedIds = process.argv.slice(2);
  const isPartial = selectedIds.length > 0;

  let validIds = selectedIds;
  if (isPartial) {
    const invalid = selectedIds.filter(
      (id) => !allTeamIds.includes(id),
    );
    
    if (invalid.length > 0) {
      console.warn(`Ignoring unknown team IDs: ${invalid.join(", ")}`);
      console.warn(`The list of valid IDs are: ${allTeamIds.join(", ")}`);
      validIds = selectedIds.filter((id) =>
        allTeamIds.includes(id),
      );
    }

    if (validIds.length === 0) {
      console.log("No valid team IDs provided. Aborting reset script...");
      process.exit(0);
    }
  }

  const target = isPartial ? `teams: ${validIds.join(", ")}` : "all teams";

  const confirmation = await ask(
    `Are you sure you want to reset progression for ${target}? (y/n)`,
  );
  if (confirmation !== "y") {
    console.log("Aborting reset script...");
    process.exit(0);
  }

  console.log(`Resetting progression for ${target}...`);
  await resetTeamProgress(isPartial ? validIds : undefined);

  console.log("Reset completed successfully!");
  process.exit(0);
}

main();
