import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { List, Drawer, IconButton, Button, Stack, Link } from "@mui/material";
import Iconify from "../../../utils/iconify/Iconify";
import Logo from "../../../components/main/Logo";

export default function NavMobile({ data }) {
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
        {/* <Scrollbar> */}
        <Logo sx={{ mx: 2.5, my: 3 }} />

        <List component="nav" disablePadding>
          <Link>dfdfdf</Link>
          <br />
          <Link>dfdfdf</Link>
          {/* {data.map((link) => (
              <NavList key={link.title} item={link} />
            ))} */}
        </List>
        {/* </Scrollbar> */}
      </Drawer>
    </>
  );
}
