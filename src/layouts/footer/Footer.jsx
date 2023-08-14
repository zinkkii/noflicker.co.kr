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
              fontSize: "0.9rem",
              wordBreak: "keep-all",
            }}
          >
            © 2023. All rights reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
}
