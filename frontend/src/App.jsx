import { BrowserRouter, Route, Routes } from "react-router-dom";  // Corrected import path
import "./App.css"; // Global CSS styles
import 'font-awesome/css/font-awesome.min.css';  // Font-awesome styles
// Importing pages and components
import Home from "./Pages/Home";
import Footer from './Components/Footer'; 
//import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import RegisterComplainService from "./Pages/RegisterComplainService";
import NotFound from "./Pages/NotFound"; // 404 Page not found component
import About from "./Pages/About"; // Importing the About page component
import AboutUs from "./Pages/AboutUs"; // Importing the About page component
import Navbar from "./Components/Navbar";
import Services from "./Pages/Services";
import ServiceHistory from "./Pages/ServiceHistory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/problemupload" element={<RegisterComplainService />} />
          <Route path="/about" element={<About />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/servicehistory" element={<ServiceHistory />} /> 
          {/* Catch-all route for 404 page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;