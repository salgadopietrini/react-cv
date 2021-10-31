import React from "react";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "../styles.css";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const iconsSize = "50px";

export default function Presentation() {
  return (
    <div className="presentation">
      <Stack spacing={2}>
        <Item>
          <div className="presetation-info">
            <img
              width="200px"
              height="200px"
              style={{
                borderRadius: "50%",
                border: "2px solid",
              }}
              alt="Manuel"
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGvpbRosPEzaQ/profile-displayphoto-shrink_800_800/0/1590550924345?e=1640822400&v=beta&t=Ydmjx4YYArM9x0bCAF-38_IK_ZEYQm1vyKdDofZ6U8I"
            ></img>
            <div className="manuel-info">
              <h1>Manuel Enrique Salgado Pietrini</h1>
              <h2>Web developer // Mechanical engineer</h2>
              <h3>Porto, Portugal</h3>
            </div>
          </div>
          <div className="presentation-description">
            <Typography
              sx={{ display: "inline" }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              I am a mechanical engineer finding my way through web development.
              I am very passionate about technology and enjoy being part of
              projects that challenge my skills, expand my knowledge and connect
              me with people who love what they do.
            </Typography>
          </div>
          <Divider variant="inset" />
          <div className="icons-container">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="TypeScript"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
              alt="Redux"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML5"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              alt="SASS"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              alt="MaterialUI"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap"
              width={iconsSize}
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg"
              alt="MatLab"
              width={iconsSize}
            />
          </div>
        </Item>
      </Stack>
    </div>
  );
}
