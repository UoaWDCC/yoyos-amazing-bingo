"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";

import { Heading } from "../heading";
import TeamNameEditor from "../heading/TeamNameEditor";

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
          Yoyo&apos;s <em className="ml-[-3px] font-semibold">Amazing</em>{" "}
          Bingo!
        </Heading.h2>
        {/* technically for the non existance SEO */}
        <Heading.h1>{title || "Untitled"}</Heading.h1>
      </div>
      <div className="flex justify-between">
        <TeamNameEditor />
      </div>
    </div>
  );
}