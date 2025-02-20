// import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import {
//   Box,
//   Button,
//   Grid,
//   TextField,
//   Typography,
//   Avatar,
//   InputAdornment,
//   useMediaQuery,
//   useTheme,
// } from "@mui/material";
// import GooglePayIcon from "@mui/icons-material/Google";
// import PaytmIcon from "@mui/icons-material/AccountBalanceWallet";
// import { motion } from "framer-motion";

// const PaymentPage = () => {
//   const { state } = useLocation();
//   const service = state?.service || {};
//   const { register, handleSubmit, setValue, formState: { errors } } = useForm(); // useForm hook

//   useEffect(() => {
//     if (service.price) {
//       setValue("amount", service.price.replace("₹", ""));
//     }
//   }, [service, setValue]);

//   const onSubmit = (data) => { // Function for form submission
//     console.log("Payment Data:", data);
//     // Here you can handle the payment processing logic
//   };

//   const handleGooglePayClick = () => {
//     const paymentsClient = new window.google.payments.api.PaymentsClient({
//       environment: 'TEST', // Change to 'PRODUCTION' for live environment
//     });

//     const paymentDataRequest = {
//       apiVersion: 2,
//       apiVersionMinor: 0,
//       allowedPaymentMethods: [{
//         type: 'CARD',
//         parameters: {
//           allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
//           allowedCardNetworks: ['AMEX', 'MASTERCARD', 'VISA']
//         },
//         tokenizationSpecification: {
//           type: 'PAYMENT_GATEWAY',
//           parameters: {
//             gateway: 'example',
//             gatewayMerchantId: 'exampleMerchantId'
//           }
//         }
//       }],
//       merchantInfo: {
//         merchantId: '12345678901234567890',
//         merchantName: 'Example Merchant'
//       },
//       transactionInfo: {
//         totalPriceStatus: 'FINAL',
//         totalPrice: service.price.replace("₹", ""),
//         currencyCode: 'INR'
//       }
//     };

//     paymentsClient.loadPaymentData(paymentDataRequest).then(paymentData => {
//       // Handle the payment response
//       console.log('Payment Data:', paymentData);
//     }).catch(error => {
//       console.error('Google Pay Error:', error);
//     });
//   };

//   const theme = useTheme(); // Material-UI theme
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screen size

//   return (
//     <Box
//       component={motion.div}
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//         backgroundColor: "#f5f5f5",
//         padding: 3,
//       }}
//     >
//       <Typography
//         variant="h4"
//         component={motion.h4}
//         initial={{ y: -50 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         sx={{ marginBottom: 3, textAlign: "center", fontWeight: "bold" }}
//       >
//         Payment Page
//       </Typography>
//       <Box
//         component={motion.div}
//         initial={{ scale: 0.9 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 0.5 }}
//         sx={{
//           width: "100%",
//           maxWidth: 600,
//           backgroundColor: "white",
//           padding: 4,
//           borderRadius: 2,
//           boxShadow: 3,
//         }}
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Grid container spacing={3}>
//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Name"
//                 variant="outlined"
//                 {...register("name", { required: "Name is required" })}
//                 error={!!errors.name}
//                 helperText={errors.name?.message}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
//                     </InputAdornment>
//                   ),
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <TextField
//                 fullWidth
//                 label="Amount"
//                 variant="outlined"
//                 type="number"
//                 {...register("amount", { required: "Amount is required" })}
//                 error={!!errors.amount}
//                 helperText={errors.amount?.message}
//                 InputProps={{
//                   readOnly: true,
//                 }}
//               />
//             </Grid>

//             <Grid item xs={12}>
//               <Button
//                 type="button"
//                 fullWidth
//                 variant="contained"
//                 startIcon={<GooglePayIcon />}
//                 onClick={handleGooglePayClick}
//                 sx={{
//                   backgroundColor: "#4285F4",
//                   color: "white",
//                   "&:hover": { backgroundColor: "#357ae8" },
//                   marginBottom: 2,
//                 }}
//               >
//                 Pay with Google Pay
//               </Button>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 startIcon={<PaytmIcon />}
//                 sx={{
//                   backgroundColor: "#003c8f",
//                   color: "white",
//                   "&:hover": { backgroundColor: "#002766" },
//                 }}
//               >
//                 Pay with Paytm
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Box>
//   );
// };

// export default PaymentPage;
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Avatar,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GooglePayIcon from "@mui/icons-material/Google";
import PaytmIcon from "@mui/icons-material/AccountBalanceWallet";
import { motion } from "framer-motion";

const PaymentPage = () => {
  const { state } = useLocation();
  const service = state?.service || {};
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  useEffect(() => {
    if (service.price) {
      setValue("amount", service.price.replace("₹", ""));
    }
  }, [service, setValue]);

  const onSubmit = (data) => {
    console.log("Payment Data:", data);
    handlePaytmPayment(data.amount);
  };

  const handleGooglePayClick = () => {
    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST', // Change to 'PRODUCTION' for live environment
    });

    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [{
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['AMEX', 'MASTERCARD', 'VISA']
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleMerchantId'
          }
        }
      }],
      merchantInfo: {
        merchantId: '12345678901234567890',
        merchantName: 'Example Merchant'
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: service.price.replace("₹", ""),
        currencyCode: 'INR'
      }
    };

    paymentsClient.loadPaymentData(paymentDataRequest).then(paymentData => {
      // Handle the payment response
      console.log('Payment Data:', paymentData);
      // Process paymentData or send it to your backend for processing
    }).catch(error => {
      console.error('Google Pay Error:', error);
    });
  };

  const handlePaytmPayment = (amount) => {
    // Call your backend API to initiate Paytm payment
    fetch('/api/paytm/initiate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ amount })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to Paytm payment page or handle payment logic
        window.location.href = data.redirectUrl;
      } else {
        console.error('Paytm Payment Error:', data.message);
      }
    })
    .catch(error => {
      console.error('Paytm Payment Error:', error);
    });
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        component={motion.h4}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{ marginBottom: 3, textAlign: "center", fontWeight: "bold" }}
      >
        Payment Page
      </Typography>
      <Box
        component={motion.div}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        sx={{
          width: "100%",
          maxWidth: 600,
          backgroundColor: "white",
          padding: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Avatar src="https://via.placeholder.com/150" alt="User Avatar" />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Amount"
                variant="outlined"
                type="number"
                {...register("amount", { required: "Amount is required" })}
                error={!!errors.amount}
                helperText={errors.amount?.message}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="button"
                fullWidth
                variant="contained"
                startIcon={<GooglePayIcon />}
                onClick={handleGooglePayClick}
                sx={{
                  backgroundColor: "#4285F4",
                  color: "white",
                  "&:hover": { backgroundColor: "#357ae8" },
                  marginBottom: 2,
                }}
              >
                Pay with Google Pay
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                startIcon={<PaytmIcon />}
                sx={{
                  backgroundColor: "#003c8f",
                  color: "white",
                  "&:hover": { backgroundColor: "#002766" },
                }}
              >
                Pay with Paytm
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default PaymentPage;

