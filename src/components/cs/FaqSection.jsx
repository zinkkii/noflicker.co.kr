import { m } from "framer-motion";
import { useState } from "react";
import { alpha } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Unstable_Grid2 as Grid,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Iconify from "../../utils/iconify/Iconify";
import { MotionViewport, varFade } from "../../utils/animate";
import useResponsive from "../../hooks/useResponsive";
import Pattern from "../../utils/pattern/Pattern";

const CONTENTS = [
  {
    question: `Q1. 안녕하세요? 이거 어떻게 해요?111`,
    answer: `아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예`,
  },
  {
    question: "Q2. 안녕하세요? 저거는 어떻게 해요?222",
    answer: `아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예`,
  },
  {
    question: "Q3. 안녕하세요? 저거는 어떻게 해요?333",
    answer: `아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예`,
  },
  {
    question: "Q4. 안녕하세요? 이거 어떻게 해요?444",
    answer: `아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예`,
  },
  {
    question: "Q5. 안녕하세요? 이거 어떻게 해요?555",
    answer: `아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예`,
  },
  {
    question: "Q6. 안녕하세요? 이거 어떻게 해요?666",
    answer: `아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예아 예 안녕하십니까. 이거는 이렇게이렇게 저렇게저렇게 하면 되는데요 네 그렇습니다 예예`,
  },
];

export default function FaqSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChangeExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      component={MotionViewport}
      sx={{
        position: "relative",
        py: { xs: 5, md: 20 },
      }}
    >
      <Grid container spacing={{ md: 3 }} justifyContent="center">
        <Grid xs={12} md={8}>
          <m.div variants={varFade().in}>
            <Typography
              variant="h2"
              sx={{ textAlign: "center", fontFamily: "Jamsil2" }}
            >
              FaQ
            </Typography>
          </m.div>

          <Box
            sx={{
              bgcolor: "transparent",
              borderColor: "transparent",
              my: { xs: 8, md: 10 },
            }}
          >
            {CONTENTS.map((faq) => (
              <m.div key={faq.question} variants={varFade().in}>
                <Accordion
                  sx={{ bgcolor: "transparent" }}
                  expanded={expanded === faq.question}
                  onChange={handleChangeExpanded(faq.question)}
                >
                  <AccordionSummary sx={{ bgcolor: "#58bc9e" }}>
                    <Typography
                      variant="body"
                      component="div"
                      sx={{ flexGrow: 1, fontFamily: "Jamsil2" }}
                    >
                      {faq.question}
                    </Typography>

                    <Iconify
                      width={24}
                      icon={
                        expanded === faq.question
                          ? "carbon:subtract"
                          : "carbon:add"
                      }
                    />
                  </AccordionSummary>

                  <AccordionDetails>
                    <Typography
                      sx={{
                        color: "text.secondary",
                        fontFamily: "Jamsil2",
                      }}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </m.div>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
