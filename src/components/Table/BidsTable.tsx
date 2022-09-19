import { Table, TableBody, TableRow } from '@mui/material';
import React, { FC } from 'react';
import { ResponseOrderRow } from '../../constants/types';
import { createRowData, formatOrders, getDecimals } from '../helpers';
import RowCell from './RowCell';

interface Props {
  bidsData: ResponseOrderRow[];
  decimalAggregation: number;
}

const BidsTable: FC<Props> = ({ bidsData, decimalAggregation }) => {
  const rows = formatOrders(bidsData, decimalAggregation)
    .sort(([a], [b]) => b - a)
    .slice(0, 15)
    .map(([price, amount]) => createRowData(Number(price), Number(amount)));

  const decimals = getDecimals[decimalAggregation];

  return (
    <Table aria-label="bids-table">
      <TableBody>
        {rows.reverse().map((row) => {
          const rowElements = Object.values(row);
          const uuid = `bid-${row.price}-${row.amount}`;

          return (
            <TableRow key={uuid}>
              {rowElements.map((value, index) =>
                index === 0 ? (
                  <RowCell
                    key={`${uuid}-cell-${index}`}
                    textColor="primary"
                    value={value}
                    decimals={decimals[index] || 0}
                  ></RowCell>
                ) : (
                  <RowCell
                    key={`${uuid}-cell-${index}`}
                    textColor="text.primary"
                    value={value}
                    decimals={index === 1 ? 5 : decimals[index] || 0}
                    alignRight
                    total={index === 2}
                  ></RowCell>
                )
              )}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default BidsTable;
