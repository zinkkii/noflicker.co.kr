import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BottomFix() {
  var style = {
    backgroundColor: "#58BC9E",
    borderTop: "1px solid #58BC9E",
    textAlign: "center",
    paddingTop: "13px",
    paddingBottom: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "75px",
    width: "100%",
    zIndex: 999,
  };
  const navigate = useNavigate();

  return (
    <div>
      <div style={style}>
        <Typography
          onClick={() => {
            navigate("/freecheckup");
          }}
          sx={{
            fontFamily: "Jamsil2",
            color: "#fff",
            fontSize: { xs: "1.1rem", md: "1.8rem", lg: "2rem", xl: "2rem" },
            cursor: "pointer",
          }}
        >
          FLICKER ZERO ZONE{" "}
          <font style={{ color: "#f93b3b" }}>최초 1회 무료</font>검진 신청
        </Typography>
      </div>
    </div>
  );
}
