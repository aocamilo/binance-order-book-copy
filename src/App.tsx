import { Layout } from "./components/Layouts";
import React from "react";
import TableComponent from "./components/Table/OrderBookTable";

import SelectComponent from "./components/DecimalAggregatorSelect/Select";

function App() {
  return (
    <Layout>
      <SelectComponent />
      <TableComponent />
    </Layout>
  );
}

export default App;
