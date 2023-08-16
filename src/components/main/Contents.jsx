import { Link as RouterLink } from "react-router-dom";
import {
  Stack,
  Container,
  Typography,
  Card,
  Box,
  IconButton,
} from "@mui/material";
import Iconify from "../../utils/iconify/Iconify";
import SvgColor from "../../utils/svg-color/SvgColor";
import TextMaxLine from "../../utils/text-max-line";

const SERVICES = [
  {
    icon: "/assets/icons/magnifying.svg",
    content: "첫 방문검진",
    number: "mdi:number-1-circle",
  },
  {
    icon: "/assets/icons/report.svg",
    content: "결과 리포트 제공",
    number: "mdi:number-2-circle",
  },
  {
    icon: "/assets/icons/engineer.svg",
    content: "조명교체/시공(원하실경우)",
    number: "mdi:number-3-circle",
  },
  {
    icon: "/assets/icons/doublecheck.svg",
    content: "조명 교체 후 재검진",
    number: "mdi:number-4-circle",
  },
];

export default function Contents() {
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
          textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
        }}
      >
        <Box sx={{ backgroundColor: "#58bc9e", borderRadius: "40px" }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: "Jamsil2",
              fontSize: "1.5rem",
              borderRadius: "10%",
              color: "#fff",
              marginTop: 2,
              marginLeft: 3,
              marginRight: 3,
              marginBottom: 2,
              wordBreak: "keep-all",
            }}
          >
            집, 매장, 사무실..원하시는 공간의{" "}
            <font style={{ color: "#222" }}>모든 플리커현상을 제거</font>{" "}
            해드립니다!
          </Typography>
        </Box>

        <Typography
          sx={{
            color: "text.secondary",
            fontFamily: "Jamsil2",
            wordBreak: "keep-all",
          }}
        >
          ※TV, 태블릿, 휴대폰 등 전자기기 플리커 검진도 가능합니다. <br />
          전자기기의 경우 디스플레이 설정에 따라 플리커현상을 제거할 수도
          있습니다.
        </Typography>
      </Stack>

      <Box
        sx={{
          gap: 4,
          display: "grid",
          alignItems: "center",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          },
        }}
      >
        {SERVICES.map((service, index) => (
          <ServiceItem key={service.number} service={service} index={index} />
        ))}
      </Box>

      <Stack
        sx={{
          mt: { xs: 8, md: 5 },
          mb: { xs: 8, md: 5 },
          mx: { xs: "auto", md: "unset" },
          textAlign: {
            xs: "center",
            sm: "center",
            md: "center",
            lg: "center",
            xl: "center",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: "text.primary", fontFamily: "Jamsil2" }}
        >
          노플리커 서비스 자세히 알아보기
          {/* <IconButton component={RouterLink} to="/service" color="primary">
            <Iconify icon="carbon:direction-straight-right" />
          </IconButton> */}
          {/* 위에 링크달면 주석 풀기 */}
          <IconButton component={RouterLink} color="primary">
            <Iconify icon="carbon:direction-straight-right" />
          </IconButton>
        </Typography>
      </Stack>
    </Container>
  );
}

function ServiceItem({ service, index }) {
  const { icon, content, number } = service;

  return (
    <Stack
      sx={{
        px: 4,
        py: 5,
        textAlign: "center",
      }}
    >
      <SvgColor
        src={icon}
        sx={{
          width: 88,
          height: 88,
          mx: "auto",
        }}
      />

      <Stack spacing={1} sx={{ my: 5 }}>
        <TextMaxLine variant="h6">
          <IconButton
            component={RouterLink}
            color={
              (index === 0 && "primary") ||
              (index === 1 && "primary") ||
              (index === 2 && "primary") ||
              "primary"
            }
          >
            <Iconify icon={number} width={30} />
          </IconButton>
        </TextMaxLine>
        <TextMaxLine
          variant="body1"
          sx={{ color: "text.secondary", fontFamily: "Jamsil2" }}
        >
          {content}
        </TextMaxLine>
      </Stack>
    </Stack>
  );
}
