import { useNavigate } from "react-router-dom";
import { Link, Box } from "@mui/material";

export default function Logo({ single = false, sx }) {
  const navigate = useNavigate();
  const singleLogo = <img src="/assets/logo/logo.svg" alt="" />;
  const fullLogo = <img src="/assets/logo/logo.svg" alt="" />;
  return (
    <Link onClick={() => navigate("/")}>
      <Box
        sx={{
          width: single ? 150 : 150,
          lineHeight: 0,
          cursor: "pointer",
          display: "inline-flex",
        }}
      >
        {single ? singleLogo : fullLogo}
      </Box>
    </Link>
  );
}
