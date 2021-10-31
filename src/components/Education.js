import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
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
  );
}
