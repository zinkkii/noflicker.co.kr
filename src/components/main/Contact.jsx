import * as Yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//@mui
import {
  Box,
  Container,
  Typography,
  Stack,
  FormHelperText,
  ToggleButton,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
//box
import FormProvider, { RHFTextField } from "../../utils/hook-form";
import axios from "axios";

export default function ContactSection() {
  return (
    <div style={{ backgroundColor: "#c9f2e5" }}>
      <Container
        sx={{
          overflow: "hidden",
          pt: { xs: 5, md: 10 },
          pb: { xs: 10, md: 15 },
        }}
      >
        <Stack
          spacing={3}
          sx={{
            maxWidth: 1200,
            mb: { xs: 8, md: 5 },
            mx: { xs: "auto", md: "unset" },
            textAlign: { xs: "center", md: "unset" },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.5rem", md: "2rem", lg: "2.5rem" },
              fontFamily: "Jamsil2",
              fontWeight: 900,
              textAlign: "center",
            }}
          >
            플리커 검진, 무료로 신청하세요
          </Typography>
        </Stack>
        <Grid xs={12} md={6} lg={6}>
          <ContactForm />
        </Grid>
      </Container>
    </div>
  );
}

function ContactForm() {
  const MarketingContactSchema = Yup.object().shape({
    services: Yup.array()
      .required()
      .max(1, "You can only choose 1")
      .min(1, "This field must have 1 item"),
    email: Yup.string()
      .required("Email is required")
      .email("That is not an email"),
    name: Yup.string().required("Name is required"),
    message: Yup.string().required("Message is required"),
  });
  const defaultValues = {
    services: [],
    email: "",
    phoneNumber: "",
    name: "",
    message: "",
  };
  const methods = useForm({
    resolver: yupResolver(MarketingContactSchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log("DATA", data);

      const form = {
        services: data.services[0],
        email: data.email,
        name: data.name,
        phoneNumber: data.phoneNumber,
        message: data.message,
      };

      axios({
        //url: "https://script.google.com/macros/s/AKfycbyv8aoqyCyyC05k6ZjadhL8uY27m_N2wSztGMQmlcauv6Yj1E25l54O0bqCK6NXgcuH/exec", zinkkiiiii@gmail
        url: "https://script.google.com/macros/s/AKfycbyXGjr-PEEDJPETJZ9bpKQQN4CdmqGvM0lbTJ8NSdT2CgdFASFvfPg8AMmCdAzm_Jw/exec", //info@supplystar.co.kr
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
        target: "tempdiv",
        data: form,
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch(() => console.log("ERROR!"));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];
  const SERVICES = ["개인", "오피스", "매장"];
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <iframe
        title="temp"
        id="tempdiv"
        name="tempdiv"
        style={{ display: "none" }}
      />
      <Stack spacing={2.5} alignItems="flex-center">
        <Controller
          name="services"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div>
              <Stack direction="row" flexWrap="wrap">
                {SERVICES.map((service) => (
                  <ToggleButton
                    {...field}
                    key={service}
                    color="standard"
                    selected={field.value.includes(service)}
                    onChange={() =>
                      field.onChange(getSelected(field.value, service))
                    }
                    sx={{
                      fontFamily: "Jamsil2",
                      m: 0.4,
                      textTransform: "initial",
                      typography: "title",
                      "&.Mui-selected": {
                        bgcolor: "text.primary",
                        borderColor: "transparent",
                        color: (theme) =>
                          theme.palette.mode === "light"
                            ? "common.white"
                            : "grey.800",
                        "&:hover": {
                          bgcolor: "text.primary",
                        },
                      },
                    }}
                  >
                    {service}
                  </ToggleButton>
                ))}
              </Stack>

              {!!error && (
                <FormHelperText error sx={{ px: 2, fontFamily: "Jamsil2" }}>
                  {error?.message}
                </FormHelperText>
              )}
            </div>
          )}
        />

        <RHFTextField
          name="email"
          label="Email"
          sx={{ fontFamily: "Jamsil2" }}
        />
        <RHFTextField
          name="phoneNumber"
          label="Phone number"
          sx={{ fontFamily: "Jamsil2" }}
        />
        <RHFTextField name="name" label="Name" sx={{ fontFamily: "Jamsil2" }} />
        <RHFTextField
          name="message"
          label="Message"
          multiline
          rows={4}
          sx={{ fontFamily: "Jamsil2" }}
        />
      </Stack>
      <Box sx={{ paddingTop: 5, paddingBottom: 1, fontFamily: "Jamsil2" }}>
        <Typography variant="p" sx={{ wordBreak: "keep-all" }}>
          * 신청해주신 순서대로 연락을 드리고 있습니다. 신청인원이 많을 경우
          연락이 늦어질 수 있는 점 양해 바랍니다.
          <br />* 기재해주신 정보는 신청하신 상담 외에 사용하지 않습니다.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <LoadingButton
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
          sx={{
            mt: 3,
            fontFamily: "Jamsil1",
            fontWeight: "700",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
          color="secondary"
        >
          플리커 검진 신청하기
        </LoadingButton>
      </Box>
    </FormProvider>
  );
}
