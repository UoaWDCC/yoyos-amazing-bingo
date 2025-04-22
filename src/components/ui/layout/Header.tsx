import React from "react";

import { Heading } from "../Heading";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <Heading.h2>Yoyo&apos;s Bingo</Heading.h2>
        {/* technically for the non existance SEO */}
        <Heading.h1>{title || "Untitled"}</Heading.h1>
      </div>
      <p>TEAM NAME</p>
    </div>
  );
};

export default Header;
