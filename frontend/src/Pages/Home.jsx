import React from "react";
import { keyframes } from "@emotion/react";
import { Global } from "@emotion/react";
import { CssBaseline, Box, Typography } from "@mui/material";
import Services from "../Pages/Service";
import About from "../Pages/About";

const moveClouds = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-200%); }
`;

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "100vh",
          bgcolor: "#0d47a1",
        }}
      >
        <CssBaseline />
        <Global
          styles={`
            @import url('https://fonts.cdnfonts.com/css/ica-rubrik-black');
            @import url('https://fonts.cdnfonts.com/css/poppins');
            body {
              font-family: 'Poppins', sans-serif;
            }
            .presentation-title {
              font-family: 'ICA Rubrik Black', sans-serif;
            }
          `}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            textAlign: "center",
            color: "#fff",
            position: "relative",
            zIndex: 2,
            padding: "0 20px",
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            className="presentation-title"
            sx={{ mb: 2 }}
          >
            24/7 PITSTOP
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{ mb: 4, fontFamily: "Poppins, sans-serif" }}
          >
            "Day or Night, We Keep You Moving"
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "200%",
            height: "100%",
            backgroundImage:
              "url(http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png)",
            animation: `${moveClouds} 120s linear infinite`,
            opacity: 0.7,
            backgroundRepeat: "repeat-x",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(http://demos.creative-tim.com/paper-kit-2/assets/img/antoine-barres.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        ></Box>
      </Box>
      <About />
      <Services />
    </div>
  );
};

export default Home;