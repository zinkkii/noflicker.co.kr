import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { List, Drawer, IconButton, Button, Stack, Link } from "@mui/material";
import Iconify from "../../../utils/iconify/Iconify";
import Logo from "../../../components/main/Logo";
import { StyledNavItem } from "./styles";

export default function NavMobile() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const NAV = { W_BASE: 260, W_DRAWER: 280, H_ITEM: 48, H_ITEM_SUB: 36 };
  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ ml: 1, color: "inherit" }}>
        <Iconify icon="carbon:menu" />
      </IconButton>

      <Drawer
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            pb: 5,
            width: NAV.W_BASE,
          },
        }}
      >
        <List component="nav" disablePadding>
          <StyledNavItem to="/flicker" sx={{ fontFamily: "Jamsil2" }}>
            플리커란?
          </StyledNavItem>
          <StyledNavItem to="/service" sx={{ fontFamily: "Jamsil2" }}>
            서비스 안내
          </StyledNavItem>
          <StyledNavItem to="/freecheckup" sx={{ fontFamily: "Jamsil2" }}>
            무료검진신청
          </StyledNavItem>
          <StyledNavItem to="/cs" sx={{ fontFamily: "Jamsil2" }}>
            고객센터
          </StyledNavItem>
        </List>
      </Drawer>
    </>
  );
}
