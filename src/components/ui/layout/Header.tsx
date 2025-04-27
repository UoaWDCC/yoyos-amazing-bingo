import { getTeamName } from "@/actions/getTeamName";

import { Heading } from "../heading";

/**
 * This is the header component for the app.
 * It displays the team name and the title of the page.
 * @param title - The title of the page.
 * @returns The header component.
 */
export default async function Header({ title }: { title: string }) {
  // THIS IMPLEMENTATION MEANS THAT THE NormalLayout COMPONENT MUST BE SERVER SIDE RENDERED
  const teamName = await getTeamName();

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
      <p>{teamName}</p>
    </div>
  );
}
