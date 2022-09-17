import { OrderRow, ResponseOrderRow } from "../../constants/types/index";

export const filterOrders = (
  order: ResponseOrderRow[],
  decimalAggregationConfig: number,
  orderLimit = 15
) =>
  order
    .map(([price, amount]) => [Number(price), Number(amount)])
    .filter(([price, amount]) => {
      return amount > 0;
      // return price % 1 === 0 && amount > 0;
    })
    .slice(0, orderLimit);
