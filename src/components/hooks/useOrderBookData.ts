import { useConfigContext } from "../contexts";
import { useEffect, useState } from "react";
import { formatOrders } from "../helpers";

export const useOrderBookData = () => {
  const { decimalAggregation, coins, setError } = useConfigContext();
  const [firstCoin, secondCoin] = coins;

  const [connection, setConnection] = useState<WebSocket>();
  const [connected, setConnected] = useState(false);

  const [lastUpdateId, setLastUpdateId] = useState<number>(0);

  const [asksData, setAskData] = useState<Record<string, number>>({});
  const [bidsData, setBidData] = useState<Record<string, number>>({});

  const [[currentPrice, lastPrice], setCurrentPrice] = useState<
    [number, number]
  >([0, 0]);

  const symbol = `${firstCoin}${secondCoin}`;

  useEffect(() => {
    const initConnection = async () => {
      try {
        const res = await fetch(
          `https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=1000`
        );
        const json = await res.json();

        if (json.lastUpdateId) {
          setLastUpdateId(json.lastUpdateId);
          const ws = new WebSocket(
            `wss://stream.binance.com/stream?streams=${symbol.toLowerCase()}@depth/${symbol.toLowerCase()}@aggTrade`
          );
          setConnection(ws);
          setConnected(true);

          ws.onopen = () => {
            console.info("Connected with binance WebSocket...");
          };

          ws.onerror = (error) => {
            console.error({ error });
          };
        }
      } catch (error) {
        setError(
          `Error Stablishing a connection with the web socket. Check the symbol and try again...${error}`
        );
      }
    };

    initConnection();
  }, [decimalAggregation]);

  useEffect(() => {
    if (!connection) return;

    connection.onmessage = (event) => {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          if (json.data.e === "depthUpdate" && json.data.u > lastUpdateId) {
            const { a: asks, b: bids } = json.data;

            if (asks.length > 0) {
              setAskData({
                ...formatOrders(asks, decimalAggregation),
              });
            }

            if (bids.length > 0) {
              setBidData({
                ...formatOrders(bids, decimalAggregation),
              });
            }

            setLastUpdateId(json.data.u);
          }

          if (json.data.e === "aggTrade") {
            const { p: currentPrice } = json.data;

            if (currentPrice) {
              setCurrentPrice(([prev]) => [Number(json.data.p), prev]);
            }
          }
        }
      } catch (error) {
        setError(
          `Error Stablishing a connection with the web socket. Check the symbol and try again... ${error}`
        );
      }
    };

    if (connection) return () => connection.close();
  }, [connection, decimalAggregation]);

  return {
    asksData,
    bidsData,
    currentPrice,
    lastPrice,
  };
};
