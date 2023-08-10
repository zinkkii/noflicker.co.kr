import { useState } from "react";
import { Box, Typography, Container, Tabs, Tab } from "@mui/material";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
const TABS = ["플리커란?", "전문가 의견"];

export default function TabSection() {
  const [value, setValue] = useState("1");

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      sx={{
        py: { xs: 5, md: 8 },
      }}
    >
      <TabContext value={value}>
        <Box sx={{ width: "100%", textAlign: "center" }}>
          <Tabs
            value={value}
            scrollButtons="auto"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
            sx={{ my: 5 }}
            centered
          >
            <Tab
              label="플리커란?"
              value="1"
              sx={{ fontFamily: "Jamsil2", color: "text.primary" }}
            />
            <Tab
              label="전문가 의견"
              value="2"
              sx={{ fontFamily: "Jamsil2", color: "text.primary" }}
            />
          </Tabs>
        </Box>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
          }}
        >
          <TabPanel
            value="1"
            sx={{ fontFamily: "Jamsil2", color: "text.secondary" }}
          >
            첫번째내용첫번째내용첫번째내용첫번째내용
            첫번째내용첫번째내용첫번째내용첫번째내용
            첫번째내용첫번째내용첫번째내용첫번째내용
            첫번째내용첫번째내용첫번째내용첫번째내용
            첫번째내용첫번째내용첫번째내용첫번째내용
          </TabPanel>
          <TabPanel
            value="2"
            sx={{ fontFamily: "Jamsil2", color: "text.secondary" }}
          >
            222두번째내용두번째222두번째내용두번째222두번째내용두번째
            222두번째내용두번째222두번째내용두번째222두번째내용두번째
            222두번째내용두번째222두번째내용두번째222두번째내용두번째
            222두번째내용두번째222두번째내용두번째222두번째내용두번째
          </TabPanel>
        </Box>
      </TabContext>
    </Container>
  );
}
