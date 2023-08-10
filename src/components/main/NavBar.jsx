import { useTheme } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Stack,
  Link,
  Container,
  Box,
  Button,
} from "@mui/material";
import useOffSetTop from "../../hooks/useOffSetTop";
import useResponsive from "../../hooks/useResponsive";
import { bgBlur } from "../../utils/style/cssStyles";
import { NavMobile, NavDesktop, navConfig } from "../../layouts/nav";
import Logo from "./Logo";

export default function NavBar() {
  const theme = useTheme();
  const HEADER = { H_MOBILE: 64, H_MAIN_DESKTOP: 88 };
  const isOffset = useOffSetTop();
  const isMdUp = useResponsive("up", "md");

  return (
    <AppBar color="transparent" sx={{ boxShadow: "none" }}>
      <Toolbar
        disableGutters
        sx={{
          justifyContent: "space-between",
          height: { xs: HEADER.H_MOBILE, md: HEADER.H_MAIN_DESKTOP },
          transition: theme.transitions.create(["height", "background-color"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(isOffset && {
            ...bgBlur({ color: theme.palette.background.default }),
            color: "text.primary",
            height: {
              md: HEADER.H_MAIN_DESKTOP - 16,
            },
          }),
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Box sx={{ lineHeight: 0, position: "relative" }}>
            <Logo />
          </Box>

          {isMdUp && <NavDesktop data={navConfig} />}
          <Stack
            spacing={2}
            flexGrow={1}
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Stack spacing={1} direction="row" alignItems="center"></Stack>
          </Stack>
          {!isMdUp && <NavMobile data={navConfig} />}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
