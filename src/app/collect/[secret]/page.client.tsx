"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import LoaderCircle from "@/components/ui/svg/LoaderCircle";

import CardProvider from "../_components/Provider";
import StateCardDisplay from "../_components/StateCardDisplay";
import StateCollectingDisplay from "../_components/StateCollectingDisplay";

const mockdata = [
  {
    title: "snorlax",
    imageIndex: 0,
    secret: "8f58666d",
  },
  {
    title: "othercard",
    imageIndex: 1,
    secret: "3210741c",
  },
];

export default function CollectClientPage({ secret }: { secret: string }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<{
    title: string;
    imageIndex: number;
  } | null>(null);

  useEffect(() => {
    if (!secret) return;
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      const card = mockdata.find((item) => item.secret === secret);
      if (card) {
        setData({
          title: card.title,
          imageIndex: card.imageIndex,
        });
      }
      setLoading(false);
    };

    fetchData();
  }, [secret]);

  const [cardState, setCardState] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  const handleAnimating = () => {
    setAnimating(true);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const html = window.document.querySelector("html");
    if (html) {
      html.setAttribute("data-state-dim", "true");
      setTimeout(() => html.setAttribute("data-state-pokehide", "true"), 200);
      setTimeout(() => html.setAttribute("data-state-blind", "true"), 2000);
      setTimeout(() => {
        html.setAttribute("data-state-dim", "false");
        html.setAttribute("data-state-blind-2", "true");
      }, 3000);
      setTimeout(() => {
        html.removeAttribute("data-state-dim");
        html.removeAttribute("data-state-pokehide");
        html.removeAttribute("data-state-blind");
        html.removeAttribute("data-state-blind-2");
        setCardState(true);
      }, 4000);
    }
  }, [isAnimating]);

  if (isLoading) {
    return (
      <>
        <div className="flex items-center justify-center">
          <LoaderCircle className="size-6 animate-spin *:stroke-rose-500" />
        </div>
        <div></div>
      </>
    );
  }

  if (!data) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <div className="text-center">
          <p className="mb-4 font-mono text-lg">Invalid code</p>
          <Link href="/board">
            <Button className="w-min rounded-full px-8">Back to board</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <CardProvider value={data}>
      {cardState ? (
        <StateCardDisplay />
      ) : (
        <StateCollectingDisplay handleAnimating={handleAnimating} />
      )}
    </CardProvider>
  );
}
