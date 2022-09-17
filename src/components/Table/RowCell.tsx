import { TableCell, Typography } from "@mui/material";
import React, { FC } from "react";

interface Props {
  textColor: "primary" | "secondary" | "text.primary";
  value: number;
  decimals: number;
  alignRight?: boolean;
}

const RowCell: FC<Props> = ({ textColor, alignRight, value, decimals }) => {
  return (
    <TableCell sx={{ width: 95 }}>
      <Typography
        textAlign={alignRight ? "right" : "left"}
        variant="body2"
        color={textColor}
      >
        {value.toFixed(decimals)}
      </Typography>
    </TableCell>
  );
};

export default RowCell;
