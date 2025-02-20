import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Avatar,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const Navbar = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "transparent",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: theme.zIndex.drawer + 1,
          paddingX: 2,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <img src="/assets/logo.png" alt="Logo" width={190} />

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {isMobile ? (
                <IconButton color="inherit" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
              ) : (
                <>
                  <Button
                    color="inherit"
                    onClick={() => navigate("/")}
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    Home
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => navigate("/services")}
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    Services
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => navigate("/aboutus")}
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    About Us
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => navigate("/login")}
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => navigate("/servicehistory")}
                    sx={{
                      marginRight: 2,
                      color: "black",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "#ff0000",
                        color: "white",
                      },
                    }}
                  >
                    HISTORY
                  </Button>
                </>
              )}
              <IconButton>
                <Avatar alt="User" src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
