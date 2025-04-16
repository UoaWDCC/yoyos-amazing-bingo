"use client";

import useSWR from "swr";

import { test } from "@/actions/test";

export default function Home() {
  const { data, isLoading } = useSWR("test", test);

  return isLoading ? <p>This is loading</p> : <h1>{data}</h1>;
}
