import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import CarouselCompo from "../Carousel/Carousel";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <CarouselCompo />
      <br />
      <h4 style={{ textAlign: "center" }} className="text-primary">
        Services
      </h4>
      <Services />
      <br />
      <br />
      <h4 style={{ textAlign: "center" }} className="text-primary">
        About Us
      </h4>
      <br />
      <AboutUs />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
