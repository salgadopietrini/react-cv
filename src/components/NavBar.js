import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs(props) {
  return (
    <Box margin="auto" sx={{ maxWidth: "100vw", bgcolor: "background.paper" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          value={props.navBar}
          onChange={props.handleNavBar}
        >
          <Tab label="About me" />
          <Tab label="Projects" />
          <Tab label="Experience" />
          <Tab label="Education" />
          <Tab label="Certifications" />
          <Tab label="Contact" />
        </Tabs>
      </div>
    </Box>
  );
}
