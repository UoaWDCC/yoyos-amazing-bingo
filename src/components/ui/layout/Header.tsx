import { getTeamName } from "@/actions/getTeamName";

import { Heading } from "../heading";

const Header = async ({ title }: { title: string }) => {
  //TODO: fetch this using SWR instead
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
};

export default Header;
