import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

export default function Experience() {
  const experiences = [
    {
      company: "PRORUPER",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQECJ1tOwwswgA/company-logo_200_200/0/1519880835047?e=1643846400&v=beta&t=iz-W6aoL6CRayAhG5cjZjIwOdfemvVVnwWPiefGrFtw",
      period: "Dec 2020 - Oct 2021",
      title: "Mechanical Engineer",
      location: "Porto - Portugal",
      duties: [
        "Design and structural analysis of metal solutions, using Solidworks and AutoCAD",
        "Drawings for production of parts and assemblies",
        "Projects management",
      ],
    },
    {
      company: "Liberty Express",
      logo: "https://media-exp1.licdn.com/dms/image/C560BAQF0x2lHZTHRTw/company-logo_100_100/0/1528473826623?e=1643846400&v=beta&t=TfNjVcuoQmJmWwgesDyYQw4S7U_DWZ4whENVLm7ZCd4",
      period: "Jun 2018 - Dec 2020",
      title: "Logistic Operator",
      location: "Porto - Portugal",
      duties: [
        "Store operations: Customer support, supply chain, store layout, physical inventory, master data management",
        "Delivery scheduled optimization, specialization on transport services",
        "Management and consulting: routes optimization, customs procedures managing, quality and stock control",
      ],
    },
    {
      company: "AVA Ingeniería",
      logo: "https://media-exp1.licdn.com/dms/image/C4E0BAQFG6cbooVqKCw/company-logo_100_100/0/1548276943462?e=1643846400&v=beta&t=rfoSVVbcJiDl6m2Cc_X8OJa0p2Gv4S-FduC1ajBi1_4",
      period: "Jan 2015 - Dec 2015",
      title: "Engineer Assistant",
      location: "Caracas - Venezuela",
      duties: [
        "Assistance in product selection (pumps, compressors and motors), contact suppliers",
        "Data management",
        "Packed Solutions",
        "Basic instrumentation",
      ],
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
        {experiences.map((elem, index) => (
          <div key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Company Logo" src={elem.logo} />
              </ListItemAvatar>
              <ListItemText
                primary={<b>{elem.title}</b>}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {elem.company}
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
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {elem.location}
                    </Typography>
                    <br />
                    {
                      <ul>
                        {elem.duties.map((duty) => (
                          <li>{duty}</li>
                        ))}
                      </ul>
                    }
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
