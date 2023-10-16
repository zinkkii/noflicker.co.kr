import { useRef } from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  Stack,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { bgGradient } from "../../utils/style/cssStyles";
import useResponsive from "../../hooks/useResponsive";
import useBoundingClientRect from "../../hooks/useBoundingClientRect";
import Image from "../../utils/image";
import SvgColor from "../../utils/svg-color/SvgColor";

// ----------------------------------------------------------------------
export const HEADER = {
  H_MOBILE: 64,
  H_MAIN_DESKTOP: 88,
};

const StyledRoot = styled("div")(({ theme }) => ({
  ...bgGradient({
    color: alpha(theme.palette.background.default, 0.9),
    imgUrl: "/assets/background/overlay_1.jpg",
  }),
  position: "relative",
  overflow: "hidden",
  [theme.breakpoints.up("md")]: {
    height: `calc(70vh - ${HEADER.H_MAIN_DESKTOP}px)`,
  },
}));

// ----------------------------------------------------------------------

export default function Header() {
  const containerRef = useRef(null);

  const isMdUp = useResponsive("up", "md");

  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  return (
    <StyledRoot>
      <Container sx={{ height: 1 }}>
        <Grid
          container
          columnSpacing={3}
          alignItems="center"
          sx={{ height: 1 }}
        >
          <Grid xs={12} md={5}>
            <Stack
              spacing={5}
              justifyContent="center"
              alignItems={{ xs: "center", md: "flex-start" }}
              sx={{
                py: 15,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography variant="h3" sx={{ fontFamily: "Jamsil2" }}>
                NOFLICKER
                <br /> 플리커현상 제거
                <Box component="span" sx={{ color: "primary.main" }}>
                  NOFLICKER{` ZONE`}
                </Box>
              </Typography>

              <Typography
                sx={{ color: "text.secondary", fontFamily: "Jamsil2" }}
              >
                검진무료신청 내용내용
              </Typography>
            </Stack>
          </Grid>

          <Grid xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </Container>

      {isMdUp && (
        <Box
          sx={{
            maxWidth: 1280,
            position: "absolute",
            bottom: { md: "20%", lg: 40 },
            right: { md: -110, xl: 0 },
            width: { md: `calc(100% - ${offsetLeft}px)` },
          }}
        >
          <Image
            visibleByDefault
            disabledEffect
            alt="home hero"
            src="/assets/images/home_hero.png"
          />
        </Box>
      )}
    </StyledRoot>
  );
}
