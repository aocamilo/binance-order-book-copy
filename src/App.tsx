import { Layout } from "./components/Layouts";
import React from "react";
import TableComponent from "./components/Table/OrderBookTable";

import SelectComponent from "./components/DecimalAggregatorSelect/Select";
import SymbolForm from "./components/SymbolForm/SymbolForm";
import { useConfigContext } from "./components/contexts/useConfigContext";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Button, Container, Typography } from "@mui/material";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <>
      <Typography variant="h5">{error}</Typography>
      <Button onClick={resetErrorBoundary} variant="outlined">
        Try Again
      </Button>
    </>
  );
}

function App() {
  const { coins, error, clearError, setCoins } = useConfigContext();

  const areCoinsSet = coins[0] && coins[1];

  const handleErrorReset = () => {
    if (areCoinsSet) {
      setCoins(["", ""]);
    }

    clearError();
  };

  return (
    <Layout>
      {!areCoinsSet && <SymbolForm />}
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {areCoinsSet && !error && (
          <>
            <SelectComponent />
            <TableComponent />
          </>
        )}
      </ErrorBoundary>
      {error && (
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: 360,
              height: 560,
            }}
          >
            <Typography variant="h5">{error}</Typography>
            <Button
              sx={{ marginY: 2 }}
              onClick={handleErrorReset}
              variant="outlined"
            >
              Try Again
            </Button>
          </Box>
        </Container>
      )}
    </Layout>
  );
}

export default App;
