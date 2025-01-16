import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSessions";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import MembershipForm from "./components/MembershipForm";

const App = () => {
  const notify = () => toast("Welcome to the Fitness App!");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route 
          path="/membership-form" 
          element={<MembershipForm />} 
        />
        
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WorkoutSessions />
              <Gallery />
              <Pricing />
              <Contact />
              <BMICalculator />
              <Footer />
              <button onClick={notify}>Notify Me</button>
            </>
          }
        />
      </Routes>

    
      <ToastContainer theme="dark" position="top-center" />
    </Router>
  );
};

export default App;
