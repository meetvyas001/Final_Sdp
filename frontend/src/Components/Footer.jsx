
// import React from 'react';
// import { Box, Container, Grid, Typography, Link } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <Box sx={{ bgcolor: 'black', color: 'white', py: 4 }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           {/* About Section */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'Red' }}>PITSTOP</Typography>
//             <Typography sx={{ mt: 2 }}>
//               PITSTOP is your dependable companion for all things automotive. We supply instant repair services, prompt towing, and everything else you may need.
//             </Typography>
//             <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
//               <Link href="https://facebook.com" target="_blank" sx={{ color: 'white', mx: 2 }}>
//                 <FontAwesomeIcon icon={faFacebook} size="2x" />
//               </Link>
//               <Link href="https://twitter.com" target="_blank" sx={{ color: 'white', mx: 2 }}>
//                 <FontAwesomeIcon icon={faTwitter} size="2x" />
//               </Link>
//               <Link href="https://instagram.com" target="_blank" sx={{ color: 'white', mx: 2 }}>
//                 <FontAwesomeIcon icon={faInstagram} size="2x" />
//               </Link>
//             </Box>
//           </Grid>

//           {/* Quick Links Section */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'Red' }}>Quick Links</Typography>
//             <Box sx={{ mt: 2 }}>
//               <Link href="/services" sx={{ color: 'white', display: 'block', mb: 1 }}>Services</Link>
//               <Link href="/about" sx={{ color: 'white', display: 'block', mb: 1 }}>About Us</Link>
//               <Link href="/contact" sx={{ color: 'white', display: 'block', mb: 1 }}>Contact Us</Link>
//               {/* <Link href="/blog" sx={{ color: 'white', display: 'block' }}>Blog</Link> */}
//             </Box>
//           </Grid>

//           {/* Contact Info Section */}
//           <Grid item xs={12} md={4}>
//             <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'Red' }}>Contact Info</Typography>
//             <Typography sx={{ mt: 2 }}>New Ranip, Gandhinagar, Meghaninagar</Typography>
//             <Typography sx={{ mt: 1 }}>Email: support@PITSTOP.com</Typography>
//             <Typography sx={{ mt: 1 }}>Phone: +91 79902 53434 , +91 91042 82251</Typography>
//           </Grid>
//         </Grid>

//         {/* Footer Bottom */}
//         <Box sx={{ textAlign: 'center', mt: 4 }}>
//           <Typography variant="body2" sx={{ color: 'black', bgcolor: 'white' }}>
//             &copy; 2025 PITSTOP. All rights reserved.
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;







import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'black', color: 'white', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'Red' }}>PITSTOP</Typography>
            <Typography sx={{ mt: 2 }}>
              PITSTOP is your dependable companion for all things automotive. We supply instant repair services, prompt towing, and everything else you may need.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Link href="https://facebook.com" target="_blank" sx={{ color: 'white', mx: 2 }}>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link href="https://twitter.com" target="_blank" sx={{ color: 'white', mx: 2 }}>
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link href="https://instagram.com" target="_blank" sx={{ color: 'white', mx: 2 }}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </Box>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'Red' }}>Quick Links</Typography>
            <Box sx={{ mt: 2 }}>
              <Link href="/home" sx={{ color: 'white', display: 'block', mb: 1 }}>Home</Link>
              <Link href="/services" sx={{ color: 'white', display: 'block', mb: 1 }}>Services</Link>
              <Link href="/aboutus" sx={{ color: 'white', display: 'block', mb: 1 }}>About Us</Link>
              <Link href="/contact" sx={{ color: 'white', display: 'block', mb: 1 }}>Contact Us</Link>
            </Box>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'Red' }}>Contact Info</Typography>
            <Typography sx={{ mt: 2 }}>New Ranip, Gandhinagar, Meghaninagar</Typography>
            <Typography sx={{ mt: 1 }}>Email: support@PITSTOP.com</Typography>
            <Typography sx={{ mt: 1 }}>Phone: +91 79902 53434 , +91 91042 82251</Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2" sx={{ color: 'black', bgcolor: 'white' }}>
            &copy; 2025 PITSTOP. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
