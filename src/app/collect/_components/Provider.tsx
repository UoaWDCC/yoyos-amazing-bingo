import React, { createContext, useContext } from "react";

import { cardNames } from "@/assets/pokecards";

const ProviderContext = createContext({
  title: "",
  imageKey: "" as cardNames,
});

type CardProviderProps = {
  value: {
    title: string;
    imageKey: cardNames;
  };
  children: React.ReactNode;
};

const CardProvider = ({ value, children }: CardProviderProps) => {
  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useCard = () => useContext(ProviderContext);

export default CardProvider;
