import { Table, TableBody, TableRow } from "@mui/material";
import React, { FC } from "react";
import { Row } from "../../constants/types";
import RowCell from "./RowCell";

interface Props {
  rows: Row[];
}

const BidsTable: FC<Props> = ({ rows }) => {
  return (
    <Table aria-label="bids-table">
      <TableBody>
        {rows.map((row) => {
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
