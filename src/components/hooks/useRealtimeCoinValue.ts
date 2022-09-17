import { useEffect, useState } from "react";

export const useRealtimeCoinValue = () => {
  const [[currentPrice, lastPrice], setCurrentPrice] = useState<
    [number, number]
  >([0, 0]);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://stream.binance.com/stream?streams=btcbusd@aggTrade"
    );

    ws.onopen = () => {
      console.info("Connected with binance aggTrade WebSocket...");
    };

    ws.onmessage = function(event) {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          const { p: currentPrice } = json.data;

          if (currentPrice) {
            setCurrentPrice(([prev]) => [Number(json.data.p), prev]);
          }
        }
      } catch (err) {
        throw new Error("Error trying to get the current coin value...");
      }
    };

    return () => ws.close();
  }, []);

  return { currentPrice, lastPrice };
};
