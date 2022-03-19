import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutText">
        <h2>Improving The Quality Of Your Life Through Better Health.</h2>
        <br />
        <h4>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassion
        </h4>
        <br />
        <p>
          We will work with you to develop individualised care plans, including
          management of chronic diseases. We are committed to being the region’s
          premier healthcare network providing patient centered care that
          inspires clinical and service excellence.
        </p>
      </div>
      <div className="aboutImg">
        <img src="https://i.ibb.co/0M8QG9k/about-us-doctors.jpg" alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
