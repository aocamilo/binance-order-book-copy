import { ResponseOrderRow } from "../../constants/types/index";

export const formatOrders = (
  bookOrders: ResponseOrderRow[],
  decimalAggregationConfig: number
) => {
  const aggregatedData: Record<string, number> = {};
  bookOrders
    .map(([price, amount]) => [Number(price), Number(amount)])
    .filter(([, amount]) => amount > 0)
    .forEach(([price, amount]) => {
      const formattedPrice = (
        Math.floor(price / decimalAggregationConfig) * decimalAggregationConfig
      ).toFixed(2);
      if (!aggregatedData[formattedPrice]) {
        aggregatedData[formattedPrice] = Number(amount);
      } else {
        aggregatedData[formattedPrice] += Number(amount);
      }
    });
  return Object.entries(aggregatedData).map(([price, amount]) => [
    Number(price),
    amount,
  ]);
};

export const createRowData = (price: number, amount: number) => {
  return { price, amount, total: price * amount };
};
