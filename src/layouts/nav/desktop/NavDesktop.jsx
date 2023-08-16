import { Stack, Link } from "@mui/material";
import { StyledNavItem } from "./styles";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useActiveLink from "../../../hooks/useActiveLink";

export default function NavDesktop({ data, sx }) {
  return (
    // <Stack
    //   component="nav"
    //   direction="row"
    //   spacing={6}
    //   sx={{
    //     ml: 6,
    //     height: 1,
    //     ...sx,
    //   }}
    // >
    //   <StyledNavItem to="/flicker" sx={{ fontFamily: "Jamsil2" }}>
    //     플리커란?
    //   </StyledNavItem>
    //   <StyledNavItem to="/service" sx={{ fontFamily: "Jamsil2" }}>
    //     서비스 안내
    //   </StyledNavItem>
    //   <StyledNavItem to="/freecheckup" sx={{ fontFamily: "Jamsil2" }}>
    //     무료검진신청
    //   </StyledNavItem>
    //   <StyledNavItem to="/cs" sx={{ fontFamily: "Jamsil2" }}>
    //     고객센터
    //   </StyledNavItem>
    // </Stack>  == 주석 풀기

    <Stack
      component="nav"
      direction="row"
      spacing={6}
      sx={{
        ml: 6,
        height: 1,
        ...sx,
      }}
    >
      <StyledNavItem sx={{ fontFamily: "Jamsil2" }}>플리커란?</StyledNavItem>
      <StyledNavItem sx={{ fontFamily: "Jamsil2" }}>서비스 안내</StyledNavItem>
      <StyledNavItem sx={{ fontFamily: "Jamsil2" }}>무료검진신청</StyledNavItem>
      <StyledNavItem sx={{ fontFamily: "Jamsil2" }}>고객센터</StyledNavItem>
    </Stack>
  );
}

function NavList({ item }) {
  const { pathname } = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const { path, children } = item;
  const { active, isExternalLink } = useActiveLink(path, false);
  useEffect(() => {
    if (openMenu) {
      handleCloseMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpenMenu = () => {
    if (children) {
      setOpenMenu(true);
    }
  };

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  return <StyledNavItem>플리커란?</StyledNavItem>;
}
