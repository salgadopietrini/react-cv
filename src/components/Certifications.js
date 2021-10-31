import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Certifications() {
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <List sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}>
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
                    <Link
                      href={elem.credential}
                      target="_blank"
                      underline="hover"
                    >
                      See credential
                    </Link>
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
