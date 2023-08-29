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
            주식회사 티라노 | 경기도 수원시 영통구 삼성로 168번길 48,
            401호(매탄동) | 대표자:강주상 사업자 등록번호 : 617-88-01732 <br />©
            2023. All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
}
