"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ClickedIndexContextType {
  clickedIndex: number | null;
  setClickedIndex: (index: number | null) => void;
}

const ClickedIndexContext = createContext<ClickedIndexContextType | undefined>(undefined);

export const ClickedIndexProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  return (
    <ClickedIndexContext.Provider value={{ clickedIndex, setClickedIndex }}>
      {children}
    </ClickedIndexContext.Provider>
  );
};

export const useClickedIndex = (): ClickedIndexContextType => {
  const context = useContext(ClickedIndexContext);
  if (!context) {
    throw new Error("useClickedIndex must be used within a ClickedIndexProvider");
  }
  return context;
};
