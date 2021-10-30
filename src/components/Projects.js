import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { stepConnectorClasses } from "@mui/material";
import Link from "@mui/material/Link";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Shopping App",
    link: "https://github.com/salgadopietrini/shopping-app",
    imgPath: "https://i.ibb.co/X3QN4XQ/shopping-app.png",
    description:
      "Implementation of an e-shop: loads a bunch of products and lets you save them on your cart, sort by categories, take out items from the cart, and show the total price. Implemented using React Routing and Material UI.",
  },
  {
    label: "Pokedex",
    link: "https://github.com/salgadopietrini/pokedex",
    imgPath: "https://i.ibb.co/9Np1DG2/pokedex.png",
    description:
      "Pokedex app, calls a specific pokemon from the API as the user submits the name and renders its particular info. Shows also a list of pokemons according to their type, allowing the user to select any of them and show their info on the pokedex.",
  },
  {
    label: "Favorite Book Picker",
    link: "https://github.com/salgadopietrini/favorite-picker",
    imgPath: "https://i.ibb.co/GvPvK1T/favorite-picker.png",
    description:
      "Lets you search, share on twitter and pick your favorite book. Once in the list, you can click the book and be redirected to the google shop. Developed in group. Uses Context to share between different pages of the app.",
  },
  {
    label: "Personal Portfolio WebPage",
    link: "https://github.com/salgadopietrini/personal-site",
    imgPath: "https://i.ibb.co/16dHtvR/personal-site.png",
    description:
      "Personal portfolio site developed under the upgrade-hub bootcamp, implementation of HTML, CSS and SASS tools",
  },
  {
    label: "Contacts app",
    link: "https://github.com/salgadopietrini/contacts-app",
    imgPath: "https://i.ibb.co/pvMsL7w/contacts-app.png",
    description:
      "Create, read, edit and delete app for a list of contacts. Uses Context to maintain the information when navigating through different pages with ReactRoute.",
  },
  {
    label: "Timer app",
    link: "https://github.com/salgadopietrini/timer-app",
    imgPath: "https://i.ibb.co/TwCr3pn/timer-app.png",
    description:
      "Timer app, includes a digital clock, a countdown timer and a stopwatch.",
  },
  {
    label: "League of Legends stats",
    link: "https://github.com/salgadopietrini/league-of-legends-stats",
    imgPath: "https://i.ibb.co/QKXFFPx/lol.png",
    description:
      "League of legends site that aims to provide statistics about the game. Developed by in group using react with TypeScript and class components.",
  },
  {
    label: "React CV",
    link: "https://github.com/salgadopietrini/react-cv",
    imgPath: "https://i.ibb.co/Rvmzv2R/react-cv.png",
    description:
      "CV app, renders each part of the CV as a react component. Created using Material UI.",
  },
  {
    label: "Random quote machine",
    link: "https://github.com/salgadopietrini/random-quote-machine",
    imgPath: "https://i.ibb.co/yPjtXk8/random-quote-machine.png",
    description:
      "Quotes generator, simple React app developed for freeCodeCamp's frontend libraries certification.",
  },
  {
    label: "Tic-tac-toe game",
    link: "https://github.com/salgadopietrini/tic-tac-toe-game",
    imgPath: "https://i.ibb.co/sK4c69y/tic-tac-toe-game.png",
    description:
      "Old tic-tac-toe game developed using react, developed in group.",
  },
  {
    label: "Keeper app aditions",
    link: "https://github.com/salgadopietrini/keeper-app",
    imgPath: "https://i.ibb.co/BPSs4gf/keeper-app.png",
    description:
      "Clone of the Google app Keep, delete function, edit functionality, color picker and dark mode implemented by me",
  },
  {
    label: "Weather app aditions",
    link: "https://github.com/salgadopietrini/weather-app-edition",
    imgPath: "https://i.ibb.co/WFHnccF/weather-app.png",
    description:
      "Clone of an already existing weather app that uses Redux to control the states of all components and saves things on the localStorage. Added a local time functionality, aiming to practice Redux.",
  },
];

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>
              <h2>{images[activeStep].label}</h2>
            </Typography>
          </Paper>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <AutoPlaySwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="text"
                    sx={{
                      height: 150,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                      textAlign: "justify",
                    }}
                  >
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      <br />
                      {step.description}
                    </Typography>
                  </Box>
                ) : null}
                <Box
                  component="text"
                  sx={{
                    height: 50,
                    display: "block",
                    maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Link href={step.link} target="_blank" underline="hover">
                    Check repository
                  </Link>
                </Box>
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </Container>
    </React.Fragment>
  );
}
