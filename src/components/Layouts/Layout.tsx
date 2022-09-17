import { Box } from "@mui/material";
import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { useRealtimeCoinValue } from "../hooks/useRealtimeCoinValue";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  const { currentPrice } = useRealtimeCoinValue();

  return (
    <Box sx={{ flexFlow: 1 }}>
      <Helmet>
        <title> {`BTCUSD: ${currentPrice.toLocaleString("en-US")}`} </title>
      </Helmet>
      <Box>{children}</Box>
    </Box>
  );
};
