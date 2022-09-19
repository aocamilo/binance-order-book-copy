import { Box } from "@mui/material";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Box>{children}</Box>
    </Box>
  );
};
