// import React from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Typography,
//   CardMedia,
//   Button,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const serviceList = [
//   {
//     title: "Instant Vehicle Repair Service",
//     description: "Expert mechanics come to your location for quick and reliable repairs.",
//     imageUrl: "https://th.bing.com/th/id/OIP.IVH2CoEYbfgcg7LWuNuygAHaE6?rs=1&pid=ImgDetMain",
//     price: "₹2500",
//   },
//   {
//     title: "Brake System Service",
//     description: "Inspection and repair of brake pads, discs, and fluid levels for safety.",
//     imageUrl: "https://th.bing.com/th/id/OIP.9uHqCHHDUq9pvlM8leN6vgHaE7?rs=1&pid=ImgDetMain",
//     price: "₹1250",
//   },
//   {
//     title: "Engine Service",
//     description: "Complete engine diagnostics and repairs for optimal performance.",
//     imageUrl: "https://pmmonline.co.uk/wp-content/uploads/2019/03/mahle-aftermarket-main.jpg",
//     price: "₹8000",
//   },
//   {
//     title: "Oil Change",
//     description: "High-quality engine oil change to keep your engine running smoothly.",
//     imageUrl: "https://th.bing.com/th/id/R.5e864660a591d898c30bd2bb623e6533?rik=SVvCKElR9zKQiA",
//     price: "₹3200",
//   },
//   {
//     title: "Tyre Change and Repair",
//     description: "Ensure safety and performance with expert tyre services and repairs.",
//     imageUrl: "https://nmtoakville.com/wp-content/uploads/2017/05/hero__tire-service.jpg",
//     price: "₹3200",
//   },
//   {
//     title: "Battery Jumpstart",
//     description: "Quick battery jumpstart service to get your vehicle back on the road.",
//     imageUrl: "https://th.bing.com/th/id/OIP.DaXHTBqmlXglEQtH8M8xdwHaEK?rs=1&pid=ImgDetMain",
//     price: "₹500",
//   },
// ];

// const Service = () => {
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

//   return (
//     <Box sx={{ backgroundColor: "#f8f9fa", py: 6, px: 2 }}>
//       <Container>
//         <Typography
//           variant={isMobile ? "h5" : "h4"}
//           textAlign="center"
//           gutterBottom
//           sx={{ fontWeight: "bold", mb: 4 }}
//         >
//           Our Services
//         </Typography>

//         <Grid container spacing={3} justifyContent="center">
//           {serviceList.map((service, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 sx={{
//                   width: "100%",
//                   maxWidth: 360,
//                   boxShadow: 3,
//                   borderRadius: 2,
//                   transition: "transform 0.3s ease",
//                   "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
//                 }}
//               >
//                 <CardMedia component="img" height="200" image={service.imageUrl} alt={service.title} sx={{ objectFit: "cover" }} />
//                 <CardContent sx={{ p: 2 }}>
//                   <Typography variant="h6" gutterBottom>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" paragraph>
//                     {service.description}
//                   </Typography>
//                   <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
//                     {service.price}
//                   </Typography>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     fullWidth
//                     sx={{ mt: 2 }}
//                     onClick={() => navigate("/problemupload")}
//                   >
//                     Book Now
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <Box textAlign="center" mt={5}>
//           <Button
//             variant="contained"
//             sx={{
//               px: 4,
//               py: 1.5,
//               backgroundColor: "red",
//               color: "white",
//               fontSize: "1rem",
//               "&:hover": { backgroundColor: "darkred" },
//             }}
//             onClick={() => navigate("/services")}
//           >
//             See More Services
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Service;
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

const serviceList = [
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
];

const Service = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#f8f9fa", py: 6, px: 2 }}>
      <Container>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          textAlign="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4, color: "#333" }}
        >
          Our Services
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {serviceList.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  boxShadow: 3,
                  borderRadius: 2,
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.05)", boxShadow: 6 },
                }}
              >
                <CardMedia component="img" height="200" image={service.imageUrl} alt={service.title} sx={{ objectFit: "cover" }} />
                <CardContent sx={{ p: 2 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", color: "#333", mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ fontWeight: "bold" }}>
                    {service.price}
                  </Typography>
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

        <Box textAlign="center" mt={5}>
          <Button
            variant="contained"
            sx={{
              px: 4,
              py: 1.5,
              backgroundColor: "red",
              color: "white",
              fontSize: "1rem",
              "&:hover": { backgroundColor: "darkred" },
            }}
            onClick={() => navigate("/services")}
          >
            See More Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
