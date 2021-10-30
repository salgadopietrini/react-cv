import React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs(props) {
  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={props.navBar} onChange={props.handleNavBar} centered>
        <Tab label="About me" />
        <Tab label="Projects" />
        <Tab label="Experience" />
        <Tab label="Education" />
        <Tab label="Contact" />
      </Tabs>
    </Box>
  );
}
