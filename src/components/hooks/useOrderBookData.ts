import { useConfigContext } from "../contexts";
import { useEffect, useState } from "react";
import { filterOrders } from "../helpers/filterOrders";

export const useOrderBookData = () => {
  const { decimalAggregation } = useConfigContext();

  const [asksData, setAskData] = useState<any>([]); //TODO: Type this
  const [bidsData, setBidData] = useState<any>([]); //TODO: Type this

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com/stream?streams=btcbusd@depth"
    );

    ws.onopen = () => {
      console.info("Connected with binance WebSocket...");
    };

    ws.onmessage = function(event) {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          const { a: asks, b: bids } = json.data;

          if (asks.length > 0) {
            setAskData(filterOrders(asks, decimalAggregation));
          }

          if (bids.length > 0) {
            setBidData(filterOrders(bids, decimalAggregation));
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    return () => ws.close();
  }, []);

  return {
    asksData,
    bidsData,
  };
};
