import { useContext } from "react";
import { ApiContext } from "../context/ApiProvider";

const useLogo = () => {
  const context = useContext(ApiContext);
  return context;
};

export default useLogo;
