import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

export default function Contacts() {
  const contacts = [
    {
      type: "email",
      data: "salgadopietrini7@gmail.com",
      logo: "logo",
    },
    {
      type: "phone",
      data: "(+351) 910274805",
      logo: "logo",
    },
    {
      type: "github",
      data: "https://github.com/salgadopietrini",
      logo: "logo",
    },
    {
      type: "linkedin",
      data: "https://www.linkedin.com/in/msalgadopietrini/",
      logo: "logo",
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
      <List sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}>
        {contacts.map((elem, index) => (
          <div key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Company Logo" src={elem.logo} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link color="inherite" underline="hover">
                    {elem.data}
                  </Link>
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
