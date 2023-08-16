import { alpha, styled } from "@mui/material/styles";
import { Box, Container, Grid, Typography } from "@mui/material";
import { bgGradient } from "../../utils/style/cssStyles";
import TextMaxLine from "../../utils/text-max-line";
import Image from "../../utils/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection() {
  const StyledRoot = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/bgsickeyeman.jpg",
      color: alpha(theme.palette.grey[500], 0.1),
    }),
    overflow: "hidden",
  }));
  const StyledRoot2 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/bgdrkim.jpg",
      color: alpha(theme.palette.grey[500], 0.1),
    }),
    overflow: "hidden",
  }));
  const StyledRoot3 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/bgflicker.jpg",
      color: alpha(theme.palette.grey[500], 0.1),
    }),
    overflow: "hidden",
  }));
  const settings = {
    dots: false,
    fade: false,
    infinite: true,
    arrow: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    draggable: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };
  return (
    <Box style={{ overflow: "hidden" }}>
      <Slider {...settings}>
        <StyledRoot>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `80vh`, md: `80vh` },
            }}
          >
            <Grid
              container
              rowSpacing={{
                xs: 5,
                md: 0,
              }}
              sx={{
                py: 10,
                px: { xs: 3, md: 10 },
              }}
            >
              <Grid xs={12} md={6}>
                <Box
                  sx={{
                    maxWidth: { md: 440 },
                    textAlign: { xs: "center", md: "unset" },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Jamsil2", wordBreak: "keep-all" }}
                  >
                    <font style={{ color: "#ff0000" }}>
                      눈 피로감, 집중력 저하
                    </font>
                    <br />
                    심한 경우에는{" "}
                    <font style={{ color: "#ff0000" }}>난독증</font>
                    까지!
                    <br />
                    주변에서 가장 자주 접하는
                    <br />
                    원인인 조명{" "}
                    <font style={{ color: "#ff0000" }}>플리커현상</font>
                    부터 제거해야 합니다.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </StyledRoot>
        <StyledRoot2>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `80vh`, md: `80vh` },
            }}
          >
            <Grid
              container
              rowSpacing={{
                xs: 5,
                md: 0,
              }}
              sx={{
                py: 10,
                px: { xs: 3, md: 10 },
              }}
            >
              <Grid xs={12} md={6}>
                <Box
                  sx={{
                    maxWidth: { md: 440 },
                    textAlign: { xs: "center", md: "unset" },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Jamsil2", wordBreak: "keep-all" }}
                  >
                    눈건강을 생각한다면
                    <br />
                    플리커현상부터 잡아야합니다.
                    <br />
                    <font
                      style={{
                        fontSize: "1rem",
                        marginTop: "3rem",
                      }}
                    >
                      압구정 김정목 안과는 <br />
                      노플리커의 검진을 받고 시공을 완료한
                      <br />
                      노플리커존 입니다.
                    </font>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </StyledRoot2>
        <StyledRoot3>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: `80vh`, md: `80vh` },
            }}
          >
            <Grid
              container
              rowSpacing={{
                xs: 5,
                md: 0,
              }}
              sx={{
                py: 10,
                px: { xs: 3, md: 10 },
              }}
            >
              <Grid xs={12} md={6}>
                <Box
                  sx={{
                    maxWidth: { md: 440 },
                    textAlign: { xs: "center", md: "unset" },
                    fontSize: { xs: "0.8rem" },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontFamily: "Jamsil2", wordBreak: "keep-all" }}
                  >
                    눈건강과 뇌 건강을 위해
                    <br />
                    노플리커존을 꼭 확인하세요!
                    <br />
                    <font
                      style={{
                        fontSize: "1rem",
                        marginTop: "3rem",
                      }}
                    >
                      공간 내의 모든 조명을 검진, 시공, 더블체크하여 플리커가
                      없는 공간에 '노플리커존' 표기를 부착하고 있습니다.
                    </font>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </StyledRoot3>
      </Slider>
    </Box>
  );
}
