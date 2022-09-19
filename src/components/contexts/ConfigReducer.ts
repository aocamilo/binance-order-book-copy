import { Coins } from "../../constants/types";
import { ConfigState } from "./";

type ConfigActionType =
  | {
      type: "[Config] - Change Decimal Aggregation";
      payload: number;
    }
  | {
      type: "[Config] - Set coins";
      payload: Coins;
    }
  | {
      type: "[Config] - Set error";
      payload: string;
    }
  | {
      type: "[Config] - Clear error";
    };

export const ConfigReducer = (
  state: ConfigState,
  action: ConfigActionType
): ConfigState => {
  switch (action.type) {
    case "[Config] - Change Decimal Aggregation":
      return {
        ...state,
        decimalAggregation: action.payload,
      };

    case "[Config] - Set coins":
      return {
        ...state,
        coins: action.payload,
      };

    case "[Config] - Set error":
      return {
        ...state,
        error: action.payload,
      };

    case "[Config] - Clear error":
      return {
        ...state,
        error: "",
      };

    default:
      return state;
  }
};
