import { Button, Container, Input, InputLabel } from "@mui/material";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useConfigContext } from "../contexts/useConfigContext";

const SymbolForm = () => {
  const { setCoins } = useConfigContext();

  const [{ firstCoin, secondCoin }, setSymbolCoin] = useState({
    firstCoin: "BTC",
    secondCoin: "USDT",
  });

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSymbolCoin((prev) => ({
      ...prev,
      [e.target.name]: e.target.value.toUpperCase(),
    }));
  };

  const onSubmit = () => {
    if (firstCoin && secondCoin) {
      setCoins([firstCoin, secondCoin]);
    }
  };

  return (
    <>
      <InputLabel>Input Symbol (i.e. BTC/USDT)</InputLabel>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          wrap: "nowrap",
          width: 320,
          justifyContent: "space-evenly",
          marginTop: 2,
          padding: 0,
        }}
      >
        <Input
          placeholder="BTC"
          value={firstCoin}
          name="firstCoin"
          onChange={onInputChange}
          sx={{ maxWidth: 60 }}
        />
        /
        <Input
          placeholder="USDT"
          value={secondCoin}
          name="secondCoin"
          onChange={onInputChange}
          sx={{ maxWidth: 60 }}
        />
        <Button onClick={onSubmit} variant="outlined">
          Go!
        </Button>
      </Container>
    </>
  );
};

export default SymbolForm;
