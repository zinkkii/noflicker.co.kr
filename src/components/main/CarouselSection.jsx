import { alpha, styled } from "@mui/material/styles";
import { Box, Container, Grid } from "@mui/material";
import { bgGradient } from "../../utils/style/cssStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSection() {
  const StyledRoot = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/01.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const StyledRoot2 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/02.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
    }),
    overflow: "hidden",
  }));
  const StyledRoot3 = styled("div")(({ theme }) => ({
    ...bgGradient({
      imgUrl: "/assets/images/03.jpg",
      color: alpha(theme.palette.grey[900], 0.5),
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
              height: { xs: "50vh", md: `80vh` },
            }}
          >
            <Grid
              item={true}
              container
              columnSpacing={{ xs: 0, md: 10 }}
              sx={{ alignItems: "center" }}
            >
              <Grid
                item={true}
                xs={12}
                md={12}
                lg={12}
                sx={{
                  textAlign: { xs: "center", md: "center" },
                  alignItems: { xs: "center", md: "center" },
                  mx: { xs: 0, md: 22 },
                }}
              ></Grid>
            </Grid>
          </Container>
        </StyledRoot>
        <StyledRoot2>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: "50vh", md: `80vh` },
            }}
          >
            <Grid
              item={true}
              container
              columnSpacing={{ xs: 0, md: 10 }}
              sx={{ alignItems: "center" }}
            >
              <Grid
                item={true}
                xs={12}
                md={12}
                lg={12}
                sx={{
                  textAlign: { xs: "center", md: "center" },
                  alignItems: { xs: "center", md: "center" },
                  mx: { xs: 0, md: 22 },
                }}
              ></Grid>
            </Grid>
          </Container>
        </StyledRoot2>
        <StyledRoot3>
          <Container
            sx={{
              py: 15,
              display: { md: "flex" },
              alignItems: { md: "center" },
              height: { xs: "50vh", md: `80vh` },
            }}
          >
            <Grid
              item={true}
              container
              columnSpacing={{ xs: 0, md: 10 }}
              sx={{ alignItems: "center" }}
            >
              <Grid
                item={true}
                xs={12}
                md={12}
                lg={12}
                sx={{
                  textAlign: { xs: "center", md: "center" },
                  alignItems: { xs: "center", md: "center" },
                  mx: { xs: 0, md: 22 },
                }}
              ></Grid>
            </Grid>
          </Container>
        </StyledRoot3>
      </Slider>
    </Box>
  );
}
