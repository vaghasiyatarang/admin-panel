import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../utils/theme";

const StatBox = ({ title, subtitle, progress, increase, icon }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" p="12px 0">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
        </Box>
      </Box>
      <Box display="block" justifyContent="space-between" mt="2px">
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[100], textAlign: 'end', color:'#5e5873',fontFamily: 'inherit',fontSize: '20px',fontWeight: '600' }}
        >
          {title}
        </Typography>
        <Typography variant="h5" sx={{ color: colors.greenAccent[500], paddingTop: '0.5rem',fontSize:'11px', fontWeight: '800', color: '#6e6e6e' }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;