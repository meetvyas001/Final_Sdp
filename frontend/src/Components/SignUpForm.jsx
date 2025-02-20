// Components/SignUpForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import {
  TextField,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
  Box,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { auth, provider } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      console.log("User signed up successfully");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      console.log("User signed up with Google");
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f4f6f8",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
          <Grid item xs={12} sm={6}>
            <Box
              component="img"
              src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg?t=st=1736235479~exp=1736239079~hmac=f0449808275dfab0cc0eb56cddf7c62a4b9603a44fa3293ae4c7aef1cd6e35ce&w=740"
              alt="Signup Illustration"
              sx={{ width: "100%", height: "auto", maxWidth: 500, margin: "0 auto" }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, backgroundColor: "#ffffff", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}>
              <Box sx={{ marginBottom: 4 }}>
                <img src="/assets/logo.png" alt="" width={190} />
              </Box>
              <Typography variant="h4" align="center" sx={{ marginBottom: 3, fontWeight: "bold", fontSize: "2rem", color: "#333" }}>
                Create an Account
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Username"
                      variant="outlined"
                      {...register("username", {
                        required: "Username is required",
                        minLength: { value: 3, message: "Username must be at least 3 characters" },
                      })}
                      error={!!errors.username}
                      helperText={errors.username ? errors.username.message : ""}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      variant="outlined"
                      {...register("email", {
                        required: "Email is required",
                        pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message: "Invalid email address" },
                      })}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      variant="outlined"
                      {...register("password", {
                        required: "Password is required",
                        minLength: { value: 6, message: "Password must be at least 6 characters" },
                      })}
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message : ""}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Contact Number"
                      variant="outlined"
                      type="tel"
                      {...register("contactNumber", {
                        required: "Contact number is required",
                        pattern: { value: /^[0-9]{10}$/, message: "Invalid contact number" },
                      })}
                      error={!!errors.contactNumber}
                      helperText={errors.contactNumber ? errors.contactNumber.message : ""}
                      sx={{ "& .MuiOutlinedInput-root": { borderRadius: 2 } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "black",
                        color: "white",
                        marginTop: 2,
                        borderRadius: 2,
                        "&:hover": { backgroundColor: "#ff0000", color: "white" },
                      }}
                    >
                      Sign Up
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleGoogleSignUp}
                      fullWidth
                      variant="contained"
                      size="large"
                      sx={{
                        backgroundColor: "#4285F4",
                        color: "white",
                        marginTop: 2,
                        borderRadius: 2,
                        "&:hover": { backgroundColor: "#357ae8", color: "white" },
                      }}
                    >
                      Sign Up with Google
                    </Button>
                  </Grid>
                </Grid>
              </form>
              <Box sx={{ marginTop: 2, textAlign: "center" }}>
                <Typography variant="body2" color="text.secondary">
                  Already Registered?{" "}
                  <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
                    Sign In
                  </Link>
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignUpForm;
