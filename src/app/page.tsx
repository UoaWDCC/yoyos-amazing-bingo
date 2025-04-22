"use client";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import useTestQuery from "@/queries/testQuery";

export default function Home() {
  const { data, isLoading } = useTestQuery();

  return (
    <NormalLayout title="Home">
      <p>
        By default, this data is cached for 2s and refetched when you refocus
        the page. Try change tabs and back!{data}
      </p>
      <div> {isLoading ? <p>This is loading</p> : <h1>{data}</h1>}</div>
    </NormalLayout>
  );
}
