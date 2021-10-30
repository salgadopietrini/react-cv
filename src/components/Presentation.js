import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import zIndex from "@mui/material/styles/zIndex";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Presentation() {
  return (
    <div>
      <Stack spacing={2}>
        <Item style={{ width: "800px" }}>
          <img
            width="250px"
            style={{
              borderRadius: "50%",
              border: "2px solid",
            }}
            alt="Manuel"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQGvpbRosPEzaQ/profile-displayphoto-shrink_800_800/0/1590550924345?e=1640822400&v=beta&t=Ydmjx4YYArM9x0bCAF-38_IK_ZEYQm1vyKdDofZ6U8I"
          ></img>
          <h1>Manuel Enrique Salgado Pietrini</h1>
          <h2>Web developer // Mechanical engineer</h2>
          <h3>Porto, Portugal</h3>
        </Item>
      </Stack>
    </div>
  );
}
