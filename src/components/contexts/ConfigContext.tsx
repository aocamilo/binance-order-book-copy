import { createContext } from "react";
import { Coins } from "../../constants/types";

export interface ConfigContextProps {
  decimalAggregation: number;
  coins: Coins;
  error: string;
  changeDecimalAggregation: (decimalConfig: number) => void;
  setCoins: (coins: [string, string]) => void;
  setError: (error: string) => void;
  clearError: () => void;
}
export const ConfigContext = createContext<ConfigContextProps>(
  {} as ConfigContextProps
);
