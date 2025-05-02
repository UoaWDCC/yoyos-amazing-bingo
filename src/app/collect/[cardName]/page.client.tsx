"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { CardNames, cards } from "@/assets/pokecards";
import { Button } from "@/components/ui/button";
import LoaderCircle from "@/components/ui/svg/LoaderCircle";

import CardProvider from "../_components/Provider";
import StateCardDisplay from "../_components/StateCardDisplay";
import StateCollectingDisplay from "../_components/StateCollectingDisplay";
import useAuth from "@/queries/useAuth";
import useGetTeam from "@/queries/useGetTeam";

export default function CollectClientPage({ cardName }: { cardName: string }) {
  const { data: teamId } = useAuth();
  const { data: team } = useGetTeam(teamId ?? null);
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

  if (!team) {
    return (
      <>
        <div className="flex items-center justify-center">
          <LoaderCircle className="size-6 animate-spin *:stroke-rose-500" />
        </div>
        <div></div>
      </>
    );
  }

  if (!Object.keys(cards.images).includes(cardName)) {
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
    <CardProvider
      value={{
        title: team.name,
        imageKey: cardName as CardNames,
      }}
    >
      {cardState ? (
        <StateCardDisplay />
      ) : (
        <StateCollectingDisplay handleAnimating={handleAnimating} />
      )}
    </CardProvider>
  );
}