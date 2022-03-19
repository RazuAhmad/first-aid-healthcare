import React, { createContext } from "react";
import UseFirebase from "./Firebase/UseFirebase";

export const WholeContext = createContext();
const AllContext = ({ children }) => {
  return (
    <WholeContext.Provider value={UseFirebase()}>
      {children}
    </WholeContext.Provider>
  );
};

export default AllContext;
