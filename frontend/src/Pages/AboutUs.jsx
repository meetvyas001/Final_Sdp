import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// Import team images
import kirtanImage from "../Assets/images/kirtan.jpg";
import meetImage from "../Assets/images/meet.jpg";
import krushnaImage from "../Assets/images/krushna.jpg";

// Create a custom theme to apply the fonts globally
const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif', // Apply Roboto for body text
    h4: {
      fontFamily: '"Poppins", sans-serif', // Poppins for h4
      fontWeight: 700,
      fontSize: "2.5rem", // Larger size for headers
    },
    h6: {
      fontFamily: '"Montserrat", sans-serif', // Montserrat for h6
      fontWeight: 600,
      fontSize: "2rem", // Adjust font size for h6
    },
  },
  palette: {
    primary: {
      main: "#1E3A8A", // Dark blue for primary color
    },
    secondary: {
      main: "#F59E0B", // Vibrant yellow-orange for accents
    },
    background: {
      default: "#F9FAFB", // Light gray background
    },
  },
});

const About = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: { xs: 4, md: 8 }, mb: { xs: 4, md: 8 } }}>
        <Grid container alignItems="center" spacing={4}>
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 4,
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                borderRadius: "15px",
                overflow: "hidden",
                width: "100%", // Make the box responsive
              }}
            >
              <img
                src="https://media.istockphoto.com/id/1170514506/vector/racing-car-on-pit-stop-flat-vector-illustration.jpg?s=612x612&w=0&k=20&c=vGPC8b-L30b6hXOZv3_RsXjZv4RP3Az8FgxcJnJVNgA="
                alt="Racing car on a pit stop"
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </Box>
          </Grid>

          {/* Content Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: "center", md: "left" }, ml: { md: 2 } }}>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: "primary.main",
                }}
              >
                About Us
              </Typography>

              <Box
                variant="body1"
                sx={{
                  marginLeft: { xs: 0, md: "-40px" },
                  mb: 2,
                }}
              >
                <img src="/assets/logo.png" alt="Logo" width={210} />
              </Box>
              <Typography variant="h6" sx={{ fontSize: 26, mb: 2, color: "secondary.main" }}>
                Premier Vehicle Service & Repair
              </Typography>

              <Typography variant="body1" sx={{ mb: 3 }}>
                At our service center, we provide top-notch car repair and
                maintenance services to keep your vehicle in peak condition.
                With a team of experienced professionals and state-of-the-art
                tools, we ensure that your car receives the best treatment it
                deserves. Our mission is to deliver exceptional customer service
                and high-quality results every time.
              </Typography>

              <Typography variant="body1" sx={{ mb: 2 }}>
                ✅ Comprehensive Vehicle Inspections <br />
                ✅ Engine Diagnostics & Repair <br />
                ✅ Brake & Suspension Services <br />
                ✅ Tire Replacement & Wheel Alignment <br />
                ✅ Oil Change & Preventative Maintenance <br />
                ✅ Emergency Roadside Assistance <br />
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Team Section */}
        <Box sx={{ textAlign: "center", mt: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 4 }}>
            Meet Our Skilled Experts
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  border: "2px solid #1E3A8A",
                  padding: 2,
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={kirtanImage}
                  alt="Kirtan Dudhat"
                  width="100%"
                  height="350px"
                  style={{
                    borderRadius: "10px",
                    border: "5px solid #F59E0B",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600, color: "#1E3A8A" }}>
                  Kirtan Dudhat
                </Typography>
                <Typography variant="body2" sx={{ color: "black", fontSize: "1rem", fontWeight: "bold" }}>
                  Chief Mechanic & Head of Repairs
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  border: "2px solid #1E3A8A",
                  padding: 2,
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={meetImage}
                  alt="Meet Vyas"
                  width="100%"
                  height="350px"
                  style={{
                    borderRadius: "10px",
                    border: "5px solid #F59E0B",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600, color: "#1E3A8A" }}>
                  Meet Vyas
                </Typography>
                <Typography variant="body2" sx={{ color: "black", fontSize: "1rem", fontWeight: "bold" }}>
                  Service Manager & Customer Relations
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  border: "2px solid #1E3A8A",
                  padding: 2,
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={krushnaImage}
                  alt="Krushna Oza"
                  width="100%"
                  height="350px"
                  style={{
                    borderRadius: "10px",
                    border: "5px solid #F59E0B",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" sx={{ mt: 2, fontWeight: 600, color: "#1E3A8A" }}>
                  Krushna Oza
                </Typography>
                <Typography variant="body2" sx={{ color: "black", fontSize: "1rem", fontWeight: "bold" }}>
                  Senior Technician & Expert Engineer
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default About;
