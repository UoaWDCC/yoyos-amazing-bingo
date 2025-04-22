"use client";

import useTime from "@/queries/useTimeEXAMPLE";

export default function Home() {
  const { data, isLoading } = useTime();

  return (
    <>
      <p>
        By default, this data is cached for 2s and refetched when you refocus
        the page. Try change tabs and back!
      </p>
      {isLoading ? <p>This is loading</p> : <h1>{data}</h1>}
    </>
  );
}