import { forwardRef } from "react";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

const Iconnify = forwardRef(({ icon, width = 25, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={Icon}
    icon={icon}
    sx={{ width, height: width, flexShrink: 0, ...sx }}
    {...other}
  />
));

export default Iconnify;
