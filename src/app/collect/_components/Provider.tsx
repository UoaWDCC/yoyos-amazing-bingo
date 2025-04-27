import React, { createContext, useContext } from "react";

const ProviderContext = createContext({ title: "", imageIndex: 0 });

type CardProviderProps = {
  value: {
    title: string;
    imageIndex: number;
  };
  children: React.ReactNode;
}

const CardProvider = ({ value, children }: CardProviderProps) => {
  return (
    <ProviderContext.Provider value={value}>
      {children}
    </ProviderContext.Provider>
  );
};

export const useCard = () => useContext(ProviderContext);

export default CardProvider;
