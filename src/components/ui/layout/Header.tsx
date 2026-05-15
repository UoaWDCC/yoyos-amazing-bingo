"use client";

import { Heading } from "../heading";
import TeamNameDisplay from "../heading/TeamNameDisplay";

/**
 * This is the header component for the app.
 * It displays the team name and the title of the page.
 * @param title - The title of the page.
 * @returns The header component.
 */
export default function Header({ title }: { title: string }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Heading.h2>
          Webster&apos;s <em className="ml-[-3px] font-semibold">Villain Arc!</em>
        </Heading.h2>
        <Heading.h1>{title || "Untitled"}</Heading.h1>
      </div>
      <div className="flex justify-between">
        <TeamNameDisplay />
      </div>
    </div>
  );
}
