import React, { useContext, useReducer, createContext } from "react";
// import StateContext from "./Context";

export const StateContext = createContext({});

export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    // useReducer returns state and dispatch function to value
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// useContext will return the object passed into provider value
export const useStateValue = () => useContext(StateContext);
