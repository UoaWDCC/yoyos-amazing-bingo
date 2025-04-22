"use client";

import useGetTime from "@/queries/useTimeEXAMPLE";

export default function Home() {
  const { data, isLoading } = useGetTime();

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