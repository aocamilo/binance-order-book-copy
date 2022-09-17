import { Table, TableBody, TableHead, TableRow } from "@mui/material";
import React, { FC } from "react";
import { Row } from "../../constants/types";
import { useConfigContext } from "../contexts/useConfigContext";
import RowCell from "./RowCell";
import TableColumnHeader from "./TableColumnHeader";

interface Props {
  rows: Row[];
}

const AsksTable: FC<Props> = ({ rows }) => {
  const { coins } = useConfigContext();

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
