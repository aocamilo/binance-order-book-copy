import TableContainer from "@mui/material/TableContainer";

import { useOrderBookData } from "../hooks/useOrderBookData";
import RealTimeCoinValue from "./RealTimeCoinValue";

import React from "react";
import AsksTable from "./AsksTable";
import BidsTable from "./BidsTable";

const OrderBookTable = () => {
  const { asksData, bidsData, currentPrice, lastPrice } = useOrderBookData();

  return (
    <TableContainer sx={{ paddingLeft: 2, maxWidth: 320 }}>
      <AsksTable asksData={asksData} />
      <RealTimeCoinValue currentPrice={currentPrice} lastPrice={lastPrice} />
      <BidsTable bidsData={bidsData} />
    </TableContainer>
  );
};

export default OrderBookTable;
