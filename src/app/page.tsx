"use client";

import useTestQuery from "@/queries/testQuery";

export default function Home() {
  const { data, isLoading } = useTestQuery();

  return isLoading ? <p>This is loading</p> : <h1>{data}</h1>;
}
