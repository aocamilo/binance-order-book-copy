import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import React, { FC } from "react";
import { useConfigContext } from "../contexts/useConfigContext";
import { createRowData } from "../helpers";
import RowCell from "./RowCell";
import TableColumnHeader from "./TableColumnHeader";

interface Props {
  asksData: Record<string, number>;
}

const AsksTable: FC<Props> = ({ asksData }) => {
  const { coins } = useConfigContext();

  const rows = Object.entries(asksData)
    .map(([price, amount]) => [Number(price), amount])
    .sort(([a], [b]) => a - b)
    .slice(0, 15)
    .reverse()
    .map(([price, amount]) => createRowData(Number(price), Number(amount)));

  const tableHeaders = [`Price(${coins[1]})`, `Amount(${coins[0]})`, "Total"];

  return (
    <Table aria-label="ask-table">
      <TableHead>
        <TableRow>
          {tableHeaders.map((header, index) =>
            index === 0 ? (
              <TableColumnHeader key={`table-header-${index}`} text={header} />
            ) : (
              <TableColumnHeader
                key={`table-header-${index}`}
                text={header}
                alignRight
              />
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

export default AsksTable;
