import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerStyle">
      <div className="contacts">
        <h4>Contacts</h4>
        <li>Rankin Street,Wari</li>
        <li>0187593....</li>
        <li>info@caremedical.com</li>
        <li>care-skype-name</li>
      </div>
      <div className="usefulLink">
        <h4>Useful Link</h4>
        <li>About Us</li>
        <li>Team</li>
        <li>Testimonial</li>
        <li>Services</li>
      </div>
      <div className="services">
        <h4>Services</h4>
        <li>Marital Therapy</li>
        <li>Chronic Pain</li>
        <li>Anxiety Disorder</li>
        <li>Individual Coaching</li>
        <li>Blood Pressure</li>
        <li>Stress at work</li>
      </div>
    </div>
  );
};

export default Footer;
