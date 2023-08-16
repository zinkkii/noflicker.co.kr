import { Stack, Container, Typography, Grid, Box } from "@mui/material";
import Player from "../../utils/player/Player";

export default function PlayerSection() {
  return (
    <Container
      sx={{
        py: { xs: 5, md: 10 },
      }}
    >
      <Stack
        spacing={3}
        sx={{
          mb: { xs: 8, md: 5 },
          mx: { xs: "auto", md: "unset" },
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Typography variant="h4" sx={{ fontFamily: "Jamsil2" }}>
          플리커 현상이란?
        </Typography>

        <Typography
          sx={{
            color: "text.secondary",
            fontFamily: "Jamsil2",
            wordBreak: "keep-all",
          }}
        >
          전원 공급의 변동으로 인해 조명이 미세하게 떨리며 일정한 주기로 번갈아
          깜빡이는 현상
          <br />
          눈에 직접 보이지 않아도 동공과 뇌가 인식하여 건강이 악화됩니다.
        </Typography>
      </Stack>
      <Stack
        spacing={3}
        sx={{
          mb: { xs: 8, md: 5 },
          mx: { xs: "auto", md: "unset" },
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid xs={12} md={6} lg={6}>
            <Box>
              <Typography variant="h6" sx={{ fontFamily: "Jamsil2" }}>
                - 플리커현상이 있는 조명
              </Typography>
              <Box borderRight={9} borderColor="#fff">
                <Player
                  controls
                  url="https://automanix.s3.ap-northeast-2.amazonaws.com/noflicker/nnoflicker.mp4"
                />
              </Box>
            </Box>
          </Grid>

          <Grid xs={12} md={6} lg={6}>
            <Box borderRight={9} borderColor="#fff">
              <Typography variant="h6" sx={{ fontFamily: "Jamsil2" }}>
                - 건강에 안전한 조명
              </Typography>
              <Player
                controls
                url="https://automanix.s3.ap-northeast-2.amazonaws.com/noflicker/noflicker.mp4"
              />
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
