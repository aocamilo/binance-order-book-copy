import { Table, TableBody, TableRow } from "@mui/material";
import React, { FC } from "react";
import { createRowData } from "../helpers";
import RowCell from "./RowCell";

interface Props {
  bidsData: Record<string, number>;
}

const BidsTable: FC<Props> = ({ bidsData }) => {
  const rows = Object.entries(bidsData)
    .map(([price, amount]) => [Number(price), amount])
    .sort(([a], [b]) => b - a)
    .slice(0, 15)
    .map(([price, amount]) => createRowData(Number(price), Number(amount)));

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
                    decimals={2}
                  ></RowCell>
                ) : (
                  <RowCell
                    key={`${uuid}-cell-${index}`}
                    textColor="text.primary"
                    value={value}
                    decimals={5}
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

export default BidsTable;
