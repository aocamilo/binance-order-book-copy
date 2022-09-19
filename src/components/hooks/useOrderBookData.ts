import { useConfigContext } from "../contexts";
import { useEffect, useState } from "react";
import {
  ResponseOrderRow,
  SnapshotResponse,
} from "../../constants/types/index";

export const useOrderBookData = () => {
  const { coins, setError } = useConfigContext();
  const [firstCoin, secondCoin] = coins;

  const [connected, setConnected] = useState(false);

  const [lastUpdateId, setLastUpdateId] = useState<number>(0);

  const [asksData, setAskData] = useState<ResponseOrderRow[]>([]);
  const [bidsData, setBidData] = useState<ResponseOrderRow[]>([]);

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
        const json: SnapshotResponse = await res.json();

        if (json.lastUpdateId) {
          setLastUpdateId(json.lastUpdateId);
          setConnected(true);
        }
      } catch (error) {
        setError(
          `Error Stablishing a connection with the web socket. Check the symbol and try again...${error}`
        );
      }
    };

    initConnection();
  }, []);

  useEffect(() => {
    if (!connected) return;

    const ws = new WebSocket(
      `wss://stream.binance.com/stream?streams=${symbol.toLowerCase()}@depth/${symbol.toLowerCase()}@aggTrade`
    );

    ws.onerror = (error) => {
      setError(
        `Error Stablishing a connection with the web socket. Check the symbol and try again... ${error}`
      );
    };

    ws.onopen = () => {
      console.info("Connected with binance WebSocket...");
    };

    ws.onmessage = (event) => {
      const json = JSON.parse(event.data);
      try {
        if ((json.event = "data")) {
          if (json.data.e === "depthUpdate" && json.data.u > lastUpdateId) {
            const { a: asks, b: bids } = json.data;

            if (asks.length > 0) {
              setAskData(asks);
            }

            if (bids.length > 0) {
              setBidData(bids);
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

    return () => ws.close();
  }, [connected]);

  return {
    asksData,
    bidsData,
    currentPrice,
    lastPrice,
    connected,
  };
};
