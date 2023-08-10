import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../footer";
import NavBar from "../../components/main/NavBar";
import ScrollProgress from "../../utils/scroll-progress";
import ScrollToTop from "../../utils/scroll-to-top";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Box sx={{ display: "flex", flexDirection: "column", height: 1 }}>
        <NavBar />
        <ScrollProgress />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
