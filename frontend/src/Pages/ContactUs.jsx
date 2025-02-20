import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h4: {
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    body1: {
      fontSize: "1.2rem",
    },
  },
  palette: {
    primary: {
      main: "#1E3A8A",
    },
    secondary: {
      main: "#F59E0B",
    },
    background: {
      default: "#F9FAFB",
    },
  },
});

const ContactUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 8, mb: 8 }}>
        <Typography variant="h4" sx={{ textAlign: "center", mb: 4, color: "primary.main" }}>
          Contact Us
        </Typography>
        <Grid container spacing={4}>
          {/* Contact Details */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>Get In Touch</Typography>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Email sx={{ color: "primary.main", mr: 2 }} />
                <Typography variant="body1">support@pitstop.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Phone sx={{ color: "primary.main", mr: 2 }} />
                <Typography variant="body1">+1 234 567 890</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <LocationOn sx={{ color: "primary.main", mr: 2 }} />
                <Typography variant="body1">123 PitStop Street, Auto City, USA</Typography>
              </Box>
            </Box>
          </Grid>
          {/* Contact Form */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                p: 3,
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
              }}
            >
              <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>Send Us a Message</Typography>
              <TextField fullWidth label="Your Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Your Email" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Your Message" multiline rows={4} variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default ContactUs;
