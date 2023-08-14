import { styled, alpha } from "@mui/material/styles";
import { ListItemButton } from "@mui/material";

export const NAV = {
  W_BASE: 260,
  W_DRAWER: 280,
  //
  H_ITEM: 48,
  H_ITEM_SUB: 36,
};

export const StyledNavItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== "active",
})(({ active, theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: NAV.H_ITEM,
  ...(active && {
    color: theme.palette.primary.main,
    ...theme.typography.subtitle2,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
  }),
}));
