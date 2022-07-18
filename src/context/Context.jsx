import React, { createContext, useState } from "react";

const initialState = {
  count: 0,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ transfer }) => {
  const [state, setState] = useState(initialState);

  const handleCount = (type) => {
    setState((current) => ({
      ...current,
      count: type === "increment" ? current.count + 1 : current.count - 1,
    }));
  };

  return (
    <GlobalContext.Provider value={{ count: state.count, state, handleCount }}>
      {transfer}
    </GlobalContext.Provider>
  );
};