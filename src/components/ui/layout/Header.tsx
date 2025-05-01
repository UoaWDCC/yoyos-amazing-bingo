// components/Header.tsx
import { auth } from "@/actions/authActions";
import { getTeamAction } from "@/actions/getTeamAction";

import { Heading } from "../heading";
import TeamNameEditor from "../heading/TeamNameEditor";

/**
 * This is the header component for the app.
 * It displays the team name and the title of the page.
 * @param title - The title of the page.
 * @returns The header component.
 */

export default async function Header({ title }: { title: string }) {
  // THIS IMPLEMENTATION MEANS THAT THE NormalLayout COMPONENT MUST BE SERVER SIDE RENDERED
  const { teamId } = await auth();
  const team = teamId ? await getTeamAction(teamId) : null;

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <Heading.h2>
          Yoyo&apos;s <em className="ml-[-3px] font-semibold">Amazing</em>{" "}
          Bingo!
        </Heading.h2>
        {/* technically for the non existance SEO */}
        <Heading.h1>{title || "Untitled"}</Heading.h1>
      </div>
      {team && <TeamNameEditor teamId={team.id} initialName={team.name} />}
    </div>
  );
}
