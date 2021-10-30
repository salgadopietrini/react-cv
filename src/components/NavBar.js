import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs(props) {
  return (
    <Box margin="auto" sx={{ maxWidth: 620, bgcolor: "background.paper" }}>
      <Tabs
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        value={props.navBar}
        onChange={props.handleNavBar}
        centered
      >
        <Tab label="About me" />
        <Tab label="Projects" />
        <Tab label="Experience" />
        <Tab label="Education" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  );
}
