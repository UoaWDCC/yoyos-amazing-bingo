"use client";
import { NormalLayout } from "@/components/ui/layout/NormalLayout";
import CardProvider from "./_components/Provider";
import StateCardDisplay from "./_components/StateCardDisplay";
import StateCollectingDisplay from "./_components/StateCollectingDisplay";
import { useEffect, useState } from "react";

const ClientPage = () => {
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

  // Plz remove all these useEffects if possible!!
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
      <NormalLayout title="collect">
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin"
          >
            <path className="stroke-rose-500" d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        </div>
        <div></div>
      </NormalLayout>
    );
  }

  return (
    <CardProvider value={data}>
      <NormalLayout title="collect">
        {cardState ? (
            <StateCardDisplay />
          ) : (
            <StateCollectingDisplay handleAnimating={handleAnimating} />
          )}
      </NormalLayout>
    </CardProvider>
  );
};

export default ClientPage;