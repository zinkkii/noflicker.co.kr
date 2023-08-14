import { Box, Stack, Typography, Container } from "@mui/material";
import Image from "../../utils/image";

export default function FlickerStep() {
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

  return (
    <Container
      sx={{
        marginBottom: 20,
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "grid",
          placeItems: "center",
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
  );
}
