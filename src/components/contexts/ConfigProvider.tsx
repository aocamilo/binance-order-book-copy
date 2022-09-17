import { FC, useReducer } from "react";
import { ConfigContext, ConfigReducer } from "./";

import React from "react";
import { Coins } from "../../constants/types";

export interface ConfigState {
  decimalAggregation: number;
  coins: Coins;
}

const CONFIG_INITIAL_STATE: ConfigState = {
  decimalAggregation: 0.01,
  coins: ["BTC", "BUSD"],
};

export const ConfigProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(ConfigReducer, CONFIG_INITIAL_STATE);

  const changeDecimalAggregation = (decimalConfig: number) => {
    dispatch({
      type: "[Config] - Change Decimal Aggregation",
      payload: decimalConfig,
    });
  };

  const setCoins = (coins: Coins) => {
    dispatch({
      type: "[Config] - Set coins",
      payload: coins,
    });
  };

  return (
    <ConfigContext.Provider
      value={{ ...state, changeDecimalAggregation, setCoins }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
