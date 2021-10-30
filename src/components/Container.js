import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import NavBar from "./NavBar";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contacts from "./Contact";

export default function SimpleContainer() {
  const [navBar, setNavBar] = useState(0);

  const handleNavBar = (event, newValue) => {
    setNavBar(newValue);
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar navBar={navBar} handleNavBar={handleNavBar} />
      <Container maxWidth="md">
        {navBar === 0 ? (
          <Presentation />
        ) : navBar === 1 ? (
          <Projects />
        ) : navBar === 2 ? (
          <Experience />
        ) : navBar === 3 ? (
          <Education />
        ) : navBar === 4 ? (
          <Contacts />
        ) : null}
      </Container>
    </React.Fragment>
  );
}
