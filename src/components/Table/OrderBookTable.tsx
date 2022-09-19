import TableContainer from '@mui/material/TableContainer';

import { useOrderBookData } from '../hooks/useOrderBookData';
import RealTimeCoinValue from './RealTimeCoinValue';

import React from 'react';
import AsksTable from './AsksTable';
import BidsTable from './BidsTable';
import { useConfigContext } from '../contexts/useConfigContext';
import { CircularProgress, Container } from '@mui/material';

const OrderBookTable = () => {
  const { decimalAggregation } = useConfigContext();
  const { asksData, bidsData, currentPrice, lastPrice } = useOrderBookData();

  return (
    <TableContainer
      sx={{
        paddingLeft: 2,
        maxWidth: 320,
      }}
    >
      {asksData.length > 0 && bidsData.length > 0 ? (
        <>
          <AsksTable asksData={asksData} decimalAggregation={decimalAggregation} />
          <RealTimeCoinValue currentPrice={currentPrice} lastPrice={lastPrice} />
          <BidsTable bidsData={bidsData} decimalAggregation={decimalAggregation} />
        </>
      ) : (
        <Container
          sx={{
            height: 560,
            width: 320,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress sx={{ alignSelf: 'center', justifySelf: 'center' }} data-testid="spinner" />
        </Container>
      )}
    </TableContainer>
  );
};

export default OrderBookTable;
