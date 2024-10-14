import * as React from "react";

type State = { count: number };
type CountProviderProps = { children: React.ReactNode };

const CountStateContext = React.createContext<
  | {
      controls: State;
      setControls: React.Dispatch<React.SetStateAction<State>>;
    }
  | undefined
>(undefined);

function CountProvider({ children }: CountProviderProps) {
  const [controls, setControls] = React.useState({ count: 0 });

  const value = { controls, setControls };
  return (
    <CountStateContext.Provider value={value}>
      {children}
    </CountStateContext.Provider>
  );
}

function useCount() {
  const context = React.useContext(CountStateContext);

  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

export { CountProvider, useCount };
