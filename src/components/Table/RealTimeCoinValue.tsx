import { Typography, Container } from "@mui/material";
import React from "react";
import { useRealtimeCoinValue } from "../hooks/useRealtimeCoinValue";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const RealTimeCoinValue = () => {
  const { currentPrice, lastPrice } = useRealtimeCoinValue();

  const wentUp = currentPrice >= lastPrice;

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 0,
        wrap: "nowrap",
      }}
    >
      <Typography variant="h6" color={wentUp ? "primary" : "secondary"}>
        {currentPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        {wentUp ? (
          <ArrowUpwardIcon color="primary" sx={{ paddingTop: 0.6 }} />
        ) : (
          <ArrowDownwardIcon color="secondary" sx={{ paddingTop: 0.6 }} />
        )}
        {}
      </Typography>
      <Typography variant="body2" sx={{ alignSelf: "center" }}>
        ${lastPrice.toLocaleString("en-US", { minimumFractionDigits: 2 })}
      </Typography>
    </Container>
  );
};

export default RealTimeCoinValue;
