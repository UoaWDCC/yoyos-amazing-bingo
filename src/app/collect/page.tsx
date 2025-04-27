"use client";

import React, { useEffect, useState } from "react";

import { NormalLayout } from "@/components/ui/layout/NormalLayout";

import StateCardDisplay from "./_components/StateCardDisplay";
import StateCollectingDisplay from "./_components/StateCollectingDisplay";

const ClientPage = () => {
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
  return (
    <NormalLayout title="CardFloat">
      {cardState ? (
        <StateCardDisplay />
      ) : (
        <StateCollectingDisplay handleAnimating={handleAnimating} />
      )}
    </NormalLayout>
  );
};

export default ClientPage;
