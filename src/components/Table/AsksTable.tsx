import { Table, TableBody, TableHead, TableRow } from '@mui/material';
import React, { FC } from 'react';
import { ResponseOrderRow } from '../../constants/types';
import { useConfigContext } from '../contexts/useConfigContext';
import { createRowData, formatOrders, getDecimals } from '../helpers';
import RowCell from './RowCell';
import TableColumnHeader from './TableColumnHeader';

interface Props {
  asksData: ResponseOrderRow[];
  decimalAggregation: number;
}

const AsksTable: FC<Props> = ({ asksData, decimalAggregation }) => {
  const { coins } = useConfigContext();

  const rows = formatOrders(asksData, decimalAggregation)
    .sort(([a], [b]) => a - b)
    .slice(0, 15)
    .reverse()
    .map(([price, amount]) => createRowData(Number(price), Number(amount)));

  const tableHeaders = [`Price(${coins[1]})`, `Amount(${coins[0]})`, 'Total'];
  const decimals = getDecimals[decimalAggregation];

  return (
    <Table aria-label="ask-table">
      <TableHead>
        <TableRow>
          {tableHeaders.map((header, index) =>
            index === 0 ? (
              <TableColumnHeader key={`table-header-${index}`} text={header} />
            ) : (
              <TableColumnHeader key={`table-header-${index}`} text={header} alignRight />
            )
          )}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => {
          const rowElements = Object.values(row);
          const uuid = `ask-${row.price}-${row.amount}`;
          return (
            <TableRow key={uuid}>
              {rowElements.map((value, index) =>
                index === 0 ? (
                  <RowCell
                    key={`${uuid}-cell-${index}`}
                    textColor="secondary"
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

export default AsksTable;
