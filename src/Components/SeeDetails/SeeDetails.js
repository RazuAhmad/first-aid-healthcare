import React from "react";
import "./SeeDetails.css";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData/fakeData.json";
const SeeDetails = () => {
  const { uniqueId } = useParams();

  const selectedDetails = fakeData.find((pd) => pd.id === uniqueId);
  const { serviceName, serviceImg, pricing } = selectedDetails;
  console.log(selectedDetails);
  return (
    <div className="detailsStyle">
      <div className="detailText">
        <h2>
          This is details of <span className="text-danger">{serviceName}</span>
        </h2>

        <br />
        <h3>
          Price: <span className="text-danger">{pricing}</span>
        </h3>
      </div>
      <div className="img">
        <img style={{ width: "55%" }} src={serviceImg} alt="" />
      </div>
    </div>
  );
};

export default SeeDetails;
