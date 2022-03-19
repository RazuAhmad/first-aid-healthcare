import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs/AboutUs";
import Appointment from "./Components/Appointment/Appointment";
import Home from "./Components/Home/Home";
// import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/Navbar/Navbar";
import SeeDetails from "./Components/SeeDetails/SeeDetails";
import Services from "./Components/Services/Services";
import SignIn from "./Components/SignIn/SignIn";
import AllContext from "./Hooks/AllContext";
import PrivateRoute from "./Hooks/PrivateRoute";

const App = () => {
  return (
    <div>
      <AllContext>
        <Navbar />
        <br />
        <br />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:uniqueId" element={<SeeDetails />} />
          <Route path="/ourServices" element={<Services />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route
            path="/appointment"
            element={
              <PrivateRoute>
                <Appointment />
              </PrivateRoute>
            }
          />
        </Routes>
      </AllContext>
    </div>
  );
};

export default App;
