import TableContainer from "@mui/material/TableContainer";

import { useOrderBookData } from "../hooks/useOrderBookData";
import RealTimeCoinValue from "./RealTimeCoinValue";

import React from "react";
import AsksTable from "./AsksTable";
import BidsTable from "./BidsTable";

function createData(price: number, amount: number) {
  return { price, amount, total: price * amount };
}

const OrderBookTable = () => {
  const { asksData, bidsData } = useOrderBookData();

  const asks = asksData.map(([price, amount]: [number, number]) =>
    createData(Number(price), Number(amount))
  );

  const bids = bidsData.map(([price, amount]: [number, number]) =>
    createData(Number(price), Number(amount))
  );

  return (
    <TableContainer sx={{ paddingLeft: 2, maxWidth: 320 }}>
      <AsksTable rows={asks} />
      <RealTimeCoinValue />
      <BidsTable rows={bids} />
    </TableContainer>
  );
};

export default OrderBookTable;
