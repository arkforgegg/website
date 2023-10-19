import React, { createContext, useContext, useState } from "react";

const AppContext = createContext<ContextType | null>(null);

export function useStoreContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useStoreContext must be used within a ContextProvider");
  }
  return context;
}

type ContextType = {
  navStat: "nova" | "rsg" | "aghs";
  setNavStat: React.Dispatch<React.SetStateAction<"nova" | "rsg" | "aghs">>;
};

function StoreContext(props: React.PropsWithChildren<{}>) {
  const [navStat, setNavStat] = useState<"nova" | "rsg" | "aghs">("rsg");

  const contextValue: ContextType = {
    navStat,
    setNavStat,
  };

  return <AppContext.Provider value={contextValue} {...props} />;
}

export default StoreContext;
