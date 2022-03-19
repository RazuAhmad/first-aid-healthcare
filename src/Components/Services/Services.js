import React from "react";
import "./Services.css";
import AllServices from "../../fakeData/fakeData.json";
import SingleService from "../../SingleService/SingleService";
const Services = () => {
  return (
    <div className="services">
      {AllServices.map((pd) => (
        <SingleService key={pd.id} allServices={pd} />
      ))}
    </div>
  );
};

export default Services;
