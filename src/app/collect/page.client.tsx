"use client";

import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";

import CardProvider from "./_components/Provider";
import StateCardDisplay from "./_components/StateCardDisplay";
import StateCollectingDisplay from "./_components/StateCollectingDisplay";

export default function CollectClientPage() {
  const [data, setData] = useState<{
    title: string;
    imageIndex: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
      setData({
        title: "Webster's groceries",
        imageIndex: 0,
      });
    };

    fetchData();
  }, []);

  // TODO: DELETE ABOVE AND REPLACE WITH SWR

  const [cardState, setCardState] = useState(false);
  const [isAnimating, setanimating] = useState(false);

  const handleAnimating = () => {
    setanimating(true);
  };

  useEffect(() => {
    if (!isAnimating) return;

    const html = window.document.querySelector("html");
    // disaster
    if (html) {
      html.setAttribute("data-state-dim", "true");

      setTimeout(() => {
        html.setAttribute("data-state-pokehide", "true");
      }, 200);
      setTimeout(() => {
        html.setAttribute("data-state-blind", "true");
      }, 2000);
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

  if (!data) {
    // loading
    return (
      <>
        <div className="flex items-center justify-center">
          <LoaderCircle className="size-6 animate-spin *:stroke-rose-500" />
        </div>
        <div></div>
      </>
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
