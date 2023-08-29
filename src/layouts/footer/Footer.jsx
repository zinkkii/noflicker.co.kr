import { Divider, Container, Typography, Box } from "@mui/material";
import Logo from "../../components/main/Logo";

export default function Footer() {
  return (
    <>
      <Divider />
      <Box sx={{ bgcolor: "#f2f2f2" }}>
        <Container sx={{ py: 8, textAlign: "center" }}>
          <Logo />

          <Typography
            variant="caption"
            component="div"
            fontFamily="Jamsil2"
            sx={{
              color: "text.secondary",
              mt: 5,
              mb: 10,
              fontSize: "0.9rem",
              wordBreak: "keep-all",
            }}
          >
            (주)노플리커 | 경기도 용인시 처인구 포곡읍 석성로888번길 18, 301호 |
            대표자:강주상 | 사업자 등록번호 : 617-88-01732 <br />
            <br />© 2023. All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
}
