import { Box } from "@mui/material";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>{children}</Box>
    </Box>
  );
};
