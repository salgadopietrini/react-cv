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
      link: "mailto:salgadopietrini7@gmail.com",
      logo: "https://toppng.com/uploads/preview/email-icon-vector-circle-11549825158ieiklzfl8g.png",
    },
    {
      type: "phone",
      data: "(+351) 910274805",
      link: "tel:+351910274805",
      logo: "https://icon-library.com/images/black-phone-icon/black-phone-icon-19.jpg",
    },
    {
      type: "github",
      data: "github.com/salgadopietrini",
      link: "https://github.com/salgadopietrini",
      logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    },
    {
      type: "linkedin",
      data: "linkedin.com/in/msalgadopietrini",
      link: "https://www.linkedin.com/in/msalgadopietrini",
      logo: "https://www.pngitem.com/pimgs/m/49-493540_linkedin-icon-png-black-linkedin-black-logo-png.png",
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
      <List sx={{ width: "100%", maxWidth: 450, bgcolor: "background.paper" }}>
        {contacts.map((elem, index) => (
          <div key={index}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Company Logo" src={elem.logo} />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Link
                    color="black"
                    underline="hover"
                    target="_blankt"
                    href={elem.link}
                  >
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
