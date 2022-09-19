import { Layout } from "./components/Layouts";
import React from "react";
import TableComponent from "./components/Table/OrderBookTable";

import SelectComponent from "./components/DecimalAggregatorSelect/Select";
import SymbolForm from "./components/SymbolForm/SymbolForm";
import { useConfigContext } from "./components/contexts/useConfigContext";
import { ErrorBoundary } from "react-error-boundary";
import { Button, Typography } from "@mui/material";

function ErrorFallback({ error, resetErrorBoundary }: any) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
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
        <>
          <Typography variant="h5">{error}</Typography>
          <Button onClick={handleErrorReset} variant="outlined">
            Try Again
          </Button>
        </>
      )}
    </Layout>
  );
}

export default App;
