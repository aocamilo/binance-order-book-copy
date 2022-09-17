import { createContext } from "react";
import { Coins } from "../../constants/types";

export interface ConfigContextProps {
  decimalAggregation: number;
  coins: Coins;
  changeDecimalAggregation: (decimalConfig: number) => void;
  setCoins: (coins: [string, string]) => void;
}
export const ConfigContext = createContext<ConfigContextProps>(
  {} as ConfigContextProps
);
