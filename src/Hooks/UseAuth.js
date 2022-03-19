import { useContext } from "react";
import { WholeContext } from "./AllContext";

const UseAuth = () => {
  return useContext(WholeContext);
};

export default UseAuth;
