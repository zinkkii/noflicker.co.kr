import {
  Container,
  Typography,
  Button,
  Box,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import Image from "../../utils/image";

export default function Contents() {
  return (
    <Box
      sx={{
        py: { xs: 10, md: 20 },
        overflow: "hidden",
        bgcolor: "primary.lighter",
      }}
    >
      <Container>
        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={3} lg={3}>
            <Image alt="courses-online" src="/assets/images/avatar_19.jpg" />
          </Grid>
          <Grid
            xs={12}
            md={9}
            lg={9}
            sx={{
              color: "grey.800",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Jamsil2", color: "text.primary" }}
            >
              제목의 자리입니다
            </Typography>

            <Typography sx={{ mt: 3, mb: 6, fontFamily: "Jamsil2" }}>
              내용을 채울거다.내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={3} lg={3}>
            <Image alt="courses-online" src="/assets/images/avatar_19.jpg" />
          </Grid>
          <Grid
            xs={12}
            md={9}
            lg={9}
            sx={{
              color: "grey.800",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Jamsil2", color: "text.primary" }}
            >
              제목의 자리입니다
            </Typography>

            <Typography sx={{ mt: 3, mb: 6, fontFamily: "Jamsil2" }}>
              내용을 채울거다.내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={3} lg={3}>
            <Image alt="courses-online" src="/assets/images/avatar_19.jpg" />
          </Grid>
          <Grid
            xs={12}
            md={9}
            lg={9}
            sx={{
              color: "grey.800",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Jamsil2", color: "text.primary" }}
            >
              제목의 자리입니다
            </Typography>

            <Typography sx={{ mt: 3, mb: 6, fontFamily: "Jamsil2" }}>
              내용을 채울거다.내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 8, md: 3 }}
          justifyContent="space-between"
        >
          <Grid xs={12} md={3} lg={3}>
            <Image alt="courses-online" src="/assets/images/avatar_19.jpg" />
          </Grid>
          <Grid
            xs={12}
            md={9}
            lg={9}
            sx={{
              color: "grey.800",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              variant="h4"
              sx={{ fontFamily: "Jamsil2", color: "text.primary" }}
            >
              제목의 자리입니다
            </Typography>

            <Typography sx={{ mt: 3, mb: 6, fontFamily: "Jamsil2" }}>
              내용을 채울거다.내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다내용을 채울거다내용을 채울거다내용을 채울거다내용을
              채울거다
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
