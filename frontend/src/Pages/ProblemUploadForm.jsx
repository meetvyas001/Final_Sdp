import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  Grid,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
//import Navbar from "../Components/Navbar";
//import Footer from "../Components/Footer";

const ProblemUploadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm(); // useForm hook

  const [capturedImage, setCapturedImage] = useState(null); // State for captured image
  const [isCameraOn, setIsCameraOn] = useState(true); // State for webcam status
  const webcamRef = useRef(null); // Reference to the webcam component

  const onSubmit = (data) => { // Function for form submission
    if (!data.image[0] && !capturedImage) {
      setError("image", {
        type: "manual",
        message: "Either choose a file or capture an image from the camera.",
      });
      return;
    }
    console.log("Form Data:", data);
    Swal.fire({
      title: "Success!",
      text: "Your problem has been reported successfully.",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const captureImage = () => { // Function for capturing image from webcam
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setCapturedImage(imageSrc);
      setIsCameraOn(false); // Stop the webcam
      clearErrors("image"); // Clear file input errors when image is captured
    }
  };

  const theme = useTheme(); // Material-UI theme
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screen size

  return (
    <>
      {/* Left Side Container */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f4f8",
          padding: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: { xs: 2, md: 0 },
            maxWidth: { xs: "100%", md: 500 },
            order: { xs: 1, md: 0 },
          }}
        >
          <Box sx={{ width: "100%", textAlign: "center", marginBottom: 2 }}>
            <img
              src="https://cbx-prod.b-cdn.net/COLOURBOX56574537.jpg?width=800&height=800&quality=70"
              alt="Repair Service"
              style={{
                width: "100%",
                maxHeight: isSmallScreen ? "250px" : "400px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
          </Box>
        </Box>

        <Box
          sx={{
            flex: 1,
            maxWidth: 600,
            padding: { xs: 2, md: 4 },
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 3,
            order: { xs: 0, md: 1 },
          }}
        >
          {/* Right Side Container */}
          <Typography variant="h5" sx={{ fontWeight: "600", marginBottom: 2, textAlign: "center" }}>
            Report a Problem
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}> {/* Handle form submission */}
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Owner Name"
                  variant="outlined"
                  {...register("ownerName", { required: "Owner name is required" })}
                  error={!!errors.ownerName}
                  helperText={errors.ownerName?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl fullWidth error={!!errors.vehicleType}>
                  <InputLabel>Vehicle Type</InputLabel>
                  <Select label="Vehicle Type" {...register("vehicleType", { required: "Vehicle type is required" })}>
                    <MenuItem value="Activa">Activa</MenuItem>
                    <MenuItem value="bike">Bike</MenuItem>
                    <MenuItem value="car">Car</MenuItem>
                    <MenuItem value="Auto">Auto</MenuItem>
                    <MenuItem value="heavy-duty">Heavy Duty</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  <FormHelperText>{errors.vehicleType?.message}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  type="file"
                  variant="outlined"
                  {...register("image")}
                  error={!!errors.image}
                  helperText={errors.image?.message || "Either choose a file or capture an image from the camera."}
                />
              </Grid>

              <Grid item xs={12} textAlign="center">
                {isCameraOn && (
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width="100%"
                    height={200}
                    style={{ borderRadius: 8, marginBottom: 10 }}
                  />
                )}
                <Button variant="contained" onClick={captureImage} sx={{ marginBottom: 2 }}>
                  Capture from Camera
                </Button>
                {capturedImage && (
                  <img src={capturedImage} alt="Captured" style={{ width: "100%", borderRadius: 8 }} />
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Describe Problem"
                  variant="outlined"
                  multiline
                  rows={4}
                  {...register("problemDescription", { required: "Problem description is required" })}
                  error={!!errors.problemDescription}
                  helperText={errors.problemDescription?.message}
                />
              </Grid>

              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "red" } }}>
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default ProblemUploadForm;
