import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Instant Vehicle Repair Service",
    description: "Expert mechanics come to your location for quick and reliable repairs.",
    imageUrl: "https://th.bing.com/th/id/OIP.IVH2CoEYbfgcg7LWuNuygAHaE6?rs=1&pid=ImgDetMain",
    price: "₹2500",
  },
  {
    title: "Brake System Service",
    description: "Inspection and repair of brake pads, discs, and fluid levels for safety.",
    imageUrl: "https://th.bing.com/th/id/OIP.9uHqCHHDUq9pvlM8leN6vgHaE7?rs=1&pid=ImgDetMain",
    price: "₹1250",
  },
  {
    title: "Engine Service",
    description: "Complete engine diagnostics and repairs for optimal performance.",
    imageUrl: "https://pmmonline.co.uk/wp-content/uploads/2019/03/mahle-aftermarket-main.jpg",
    price: "₹8000",
  },
  {
    title: "Oil Change",
    description: "High-quality engine oil change to keep your engine running smoothly.",
    imageUrl: "https://th.bing.com/th/id/R.5e864660a591d898c30bd2bb623e6533?rik=SVvCKElR9zKQiA",
    price: "₹3200",
  },
  {
    title: "Tyre Change and Repair",
    description: "Ensure safety and performance with expert tyre services and repairs.",
    imageUrl: "https://nmtoakville.com/wp-content/uploads/2017/05/hero__tire-service.jpg",
    price: "₹3200",
  },
  {
    title: "Battery Jumpstart",
    description: "Quick battery jumpstart service to get your vehicle back on the road.",
    imageUrl: "https://th.bing.com/th/id/OIP.DaXHTBqmlXglEQtH8M8xdwHaEK?rs=1&pid=ImgDetMain",
    price: "₹500",
  },
  {
    title: "Lockout Assistance",
    description: "On-site vehicle unlocking service for when you’re locked out.",
    imageUrl: "https://th.bing.com/th/id/OIP.aH5IIc7u5FhPXVLhY-X1lwHaGN?rs=1&pid=ImgDetMain",
    price: "₹700",
  },
  {
    title: "Emergency Vehicle Pickup",
    description: "Quick towing to the nearest service station for urgent repairs.",
    imageUrl: "https://th.bing.com/th/id/R.11f6403fc5aa2aa6269f261e7a376c37?rik=FD94UjKaOf6ufw",
    price: "₹4500",
  },
  {
    title: "Air Conditioning Repair",
    description: "Expert A/C repair services to keep you cool and comfortable.",
    imageUrl: "https://i2.wp.com/carworks-longmont-auto-repair.com/wp-content/uploads/2018/03/car-air-conditioning-maintenance-Longmont.jpg?ssl=1",
    price: "₹1500",
  },
  {
    title: "Suspension & Steering Service",
    description: "Improve handling and comfort with expert steering and suspension repairs.",
    imageUrl: "https://th.bing.com/th/id/OIP.D7qWH6G6I7RqNV9joZTIHQHaE8?rs=1&pid=ImgDetMain",
    price: "₹2000",
  },
  {
    title: "Full Vehicle Service",
    description: "Comprehensive checkup for your vehicle's optimal performance.",
    imageUrl: "https://th.bing.com/th/id/OIP.N_uKnw-_SAIeIbW1chnJmwHaE7?rs=1&pid=ImgDetMain",
    price: "₹4000",
  },
  {
    title: "Diagnostic & Inspection",
    description: "Complete diagnostics to detect vehicle issues early for smooth operation.",
    imageUrl: "https://th.bing.com/th/id/OIP.NaZ9anP39i6uF8oCwzGP6AHaE8?rs=1&pid=ImgDetMain",
    price: "₹1000",
  },
];

const Services = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 6, px: isMobile ? 2 : 4 }}>
      <Container>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
        >
          Our Services
        </Typography>

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  boxShadow: 3,
                  borderRadius: 3,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <CardMedia component="img" height="200" image={service.imageUrl} alt={service.title} sx={{ objectFit: "cover" }} />
                <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", px: 3, py: 2 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
                      {service.description}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ fontWeight: "bold", mb: 2 }}>
                      {service.price}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ mt: 2 }}
                    onClick={() => navigate("/problemupload")}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
