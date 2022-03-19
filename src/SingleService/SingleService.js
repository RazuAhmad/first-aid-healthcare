import React from "react";
import { Link } from "react-router-dom";
import "./SingleService.css";
const SingleService = (props) => {
  const { serviceName, serviceImg, id } = props.allServices;
  return (
    <div className="singleService">
      <Link style={{ textDecoration: "none" }} to={"/details/" + id}>
        <img style={{ width: "95%" }} src={serviceImg} alt="" />
        <br />
        <h3>{serviceName}</h3>
        <h6>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quas
          beatae temporibus hic fugiat? Eum et sunt eos harum, fuga labore
          excepturi provident. Eveniet numquam beatae amet, cumque explicabo
          perferendis!
        </h6>

        <Link style={{ textDecoration: "none" }} to={"/details/" + id}>
          <button className="btn-primary">See Details</button>
        </Link>
      </Link>
    </div>
  );
};

export default SingleService;
