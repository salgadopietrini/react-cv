import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Education() {
  const education = [
    {
      institution: "Universidad Simón Bolívar",
      logo: "https://media-exp1.licdn.com/dms/image/C510BAQHJ3pCPfVI-AA/company-logo_100_100/0/1519889549189?e=1643846400&v=beta&t=veC1Q4aWwSKp8tdVZJN1gHoyWaXWLq6KJSzpxlGj3UY",
      period: "2012 - 2020",
      study: "Engineer degree - Mechanical Engineering",
      location: "Caracas - Venezuela",
      description:
        "Main courses include: Manufacturing Processes, Thermodynamics and Heat Transfer, Fluid Mechanics, Engineering Design, Advanced Dynamics, Mechanical vibrations and Noise Control, Machines Design, Control Systems, Computational Mechanics, Energy Convertion Systems.",
    },
    {
      institution: "Faculdade de Engenharia da Universidade do Porto",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQHvW7Fo1qyQiQ/company-logo_100_100/0/1519856424615?e=1643846400&v=beta&t=nydlp1u4i6ogm4z4ielvkMBj6YYoRjSdqAhA_NFsa3o",
      period: "2018 - 2019",
      study: "Mobility Student - Mechanical Engineering",
      location: "Porto - Portugal",
      description:
        "Elective courses: Statistics, Design of moulds and dies, Production Management, Instrumentation for measurement, Simulation of technological processes (FEA). MSc Thesis: Multiscale approach for the analysis of residual stresses in a casting component",
    },
  ];

  const courses = [
    {
      institution: "freeCodeCamp",
      logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1589990867649?e=1643846400&v=beta&t=0i_ppYY7KFlfL7xP3aKlhmuhCAXpV4BjaL-66mBwyp0",
      date: "Jul 2020",
      name: "JavaScript Algorithms and Data Structures",
      credential:
        "https://www.freecodecamp.org/certification/fcc858ed473-ceed-4259-8a58-1f4b68f2e466/javascript-algorithms-and-data-structures",
    },
    {
      institution: "freeCodeCamp",
      logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQGLKj3JHcof0w/company-logo_100_100/0/1589990867649?e=1643846400&v=beta&t=0i_ppYY7KFlfL7xP3aKlhmuhCAXpV4BjaL-66mBwyp0",
      date: "Jul 2020",
      name: "Responsive Web Design",
      credential:
        "https://www.freecodecamp.org/certification/fcc858ed473-ceed-4259-8a58-1f4b68f2e466/responsive-web-design",
    },
    {
      institution: "EF Education First",
      logo: "https://media-exp1.licdn.com/dms/image/C510BAQGrCP6CXBbjAA/company-logo_100_100/0/1571879615985?e=1643846400&v=beta&t=epgvIAqLX_KBPElb1ad6_GQFnAoHIJVTOgD7CYfn7OM",
      date: "May 2020",
      name: "EF Standarized English Test: C2 - Proficient (EFSET 82/100)",
      credential: "https://www.efset.org/cert/PRcVrQ",
    },
    {
      institution: "iESSS",
      logo: "https://media-exp1.licdn.com/dms/image/C4D0BAQEToAkrw3BkqA/company-logo_100_100/0/1619808893079?e=1643846400&v=beta&t=oimdlcA4UCefIscRufGp6fIIjYpo1ayb8qmDsbtkjBA",
      date: "May 2020",
      name: "Multiphysical Computational Simulation with Ansys Discovery",
      credential:
        "https://es.esssvirtual.com/certificates/5e95f1b71cad960021ea861a",
    },
  ];

  return (
    <div style={{ position: "relative", top: "200px" }}>
      <div>
        <h2>Education</h2>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        >
          {education.map((elem, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Company Logo" src={elem.logo} />
                </ListItemAvatar>
                <ListItemText
                  primary={<b>{elem.institution}</b>}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {elem.study}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {elem.location}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {elem.period}
                      </Typography>
                      <br />
                      {elem.description}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </div>
      <div>
        <h2>Certifications</h2>
        <List
          sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        >
          {courses.map((elem, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Company Logo" src={elem.logo} />
                </ListItemAvatar>
                <ListItemText
                  primary={<b>{elem.name}</b>}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {elem.institution}
                      </Typography>
                      <br />
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {elem.date}
                      </Typography>
                      <br />
                      <Link href={courses.credential}>See credential</Link>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </div>
          ))}
        </List>
      </div>
    </div>
  );
}
