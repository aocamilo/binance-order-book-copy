import { useContext } from "react";
import { ConfigContext } from "./ConfigContext";

export const useConfigContext = () => useContext(ConfigContext);
