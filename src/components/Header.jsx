import React from "react";
import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../utils/theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[500]}
        fontWeight="bold"
        sx={{ mb: "5px", letterSpacing: 2 }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.adminColor["greenDarkBG"]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
