import { TableCell, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  text: string;
  alignRight?: boolean;
}

const TableColumnHeader: FC<Props> = ({ alignRight, text }) => {
  return (
    <TableCell sx={{ width: 130 }}>
      <Typography
        textAlign={alignRight ? "right" : "left"}
        variant="body2"
        color="text.secondary"
      >
        {text}
      </Typography>
    </TableCell>
  );
};

export default TableColumnHeader;
