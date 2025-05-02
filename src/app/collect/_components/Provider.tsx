import React, { createContext, useContext } from "react";

import { CardNames } from "@/assets/pokecards";

const ProviderContext = createContext({
  title: "",
  imageKey: "" as CardNames,
});

type CardProviderProps = {
  value: {
    title: string;
    imageKey: CardNames;
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
