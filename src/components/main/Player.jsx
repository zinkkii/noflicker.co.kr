// import { Link as RouterLink } from "react-router-dom";
import { m } from "framer-motion";
import {
  Stack,
  Container,
  Typography,
  Grid,
  Box,
  //   IconButton,
  //   Link,
} from "@mui/material";
// import Iconify from "../../utils/iconify/Iconify";
import Image from "../../utils/image";
// import TextMaxLine from "../../utils/text-max-line";
import Player from "../../utils/player/Player";

const SUMMARY = [
  {
    title: "플리커현상 지속 ▶",
    description: "3~1,000Hz +a",
    icon: "/assets/icons/bulb.svg",
  },
  {
    title: "눈: 동공 확대/축소 반복 ▶",
    description: "눈 피로감, 안구건조증, 시력저하",
    icon: "/assets/icons/redeye.svg",
  },
  {
    title: "뇌: 빛의 변화 처리 반복",
    description: "두통, 피곤함, 몽롱함, 산만함, 발작 등 신경계질환",
    icon: "/assets/icons/brain.svg",
  },
];
export default function PlayerSection() {
  return (
    <>
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

          <Typography sx={{ color: "text.secondary", fontFamily: "Jamsil2" }}>
            전원 공급의 변동으로 인해 조명이 미세하게 떨리며 일정한 주기로
            번갈아 깜빡이는 현상
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
                  - 건강에 안전한 조명
                </Typography>
                <Box borderRight={9} borderColor="#fff">
                  <Player
                    controls
                    url="https://www.dropbox.com/s/odzycivuo9cy5rg/video_01.mp4?dl=0"
                  />
                </Box>
              </Box>
            </Grid>

            <Grid xs={12} md={6} lg={6}>
              <Box borderRight={9} borderColor="#fff">
                <Typography variant="h6" sx={{ fontFamily: "Jamsil2" }}>
                  - 플리커현상이 있는 조명
                </Typography>
                <Player
                  controls
                  url="https://www.dropbox.com/s/7cx04n8rr4w5rbg/video_02.mp4?dl=0"
                />
              </Box>
            </Grid>
          </Grid>
        </Stack>

        <Box
          sx={{
            textAlign: "center",
            display: "grid",
            placeItems: "center",
            gap: { xs: 8, md: 3 },
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {SUMMARY.map((value) => (
            <Stack
              key={value.title}
              spacing={2}
              sx={{
                textAlign: "center",
                display: "grid",
                placeItems: "center",
              }}
            >
              <Image
                src={value.icon}
                sx={{
                  maxWidth: 150,
                  paddingTop: 9,
                }}
              />
              <Typography variant="h5" sx={{ fontFamily: "Jamsil2" }}>
                {value.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "text.secondary", fontFamily: "Jamsil2" }}
              >
                {value.description}
              </Typography>
            </Stack>
          ))}
        </Box>
      </Container>
    </>
  );
}
