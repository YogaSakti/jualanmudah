import React from "react";
import {Link} from "react-router-dom"
import { MDBBox } from "mdbreact";

import "../css/style.css";

const PictName = (props) => {
  return (
    <MDBBox
      style={{
        borderRadius: "20px",
        padding: "30px 20px",
        boxShadow: "0 0 10px #e1e1e1",
        backgroundColor: "white",
        margin: "0",
      }}
      className="text-left"
    >
      <MDBBox>
        <MDBBox className="d-flex justify-content-center">
          <MDBBox>
            <img
              src={
                props.bio.user_image ? props.bio.user_image : require("../images/deafult-profile.jpg")
              }
              alt="pict"
              style={{
                height: "80px",
                width: "80px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              className="mx-auto"
            />
          </MDBBox>
        </MDBBox>
        <p
          className="text-center mb-0 pt-2"
          style={{ fontSize: "18px", fontWeight: "700", color: "#a13034"}}
        >
          {props.bio.full_name}
        </p>
      </MDBBox>
      <MDBBox className="text-center" style={{ margin: "0", padding: "0", marginTop:"10px" }}>
      <Link to="/broadcast"> 
        <button
          color="transparent"
          style={{
            backgroundColor: "#f14c59",
            border: "1px solid #f14c59",
            color: "white",
            boxShadow: "none",
            borderRadius: "40px",
            fontSize: "14px",
            height: "40px",
            margin: "0",
            padding: "0 13px",
          }}
          className="text-capitalize"
        >
          <i className="fas fa-plus mr-1"></i> New Broadcast
        </button>
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <p
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#192e35",
          }}
        >
          All segments
        </p>
        <a href="#!" style={{ color: "#192e35" }}>
          <p className="py-0 my-0" style={{ fontSize: "16px" }}>
            Woman
          </p>
        </a>
        <a href="#!" style={{ color: "#192e35" }}>
          <p className="py-0 my-0" style={{ fontSize: "16px" }}>
            Man
          </p>
        </a>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <Link
        to="/dashboard"
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#192e35",
          }}
        >
          Campaign Status
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <Link
        to="/draft"
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#192e35",
          }}
        >
          Draft
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <Link
        to="/database"
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#192e35",
          }}
        >
          Database
        </Link>
      </MDBBox>
      <hr />
      <MDBBox className="pl-3">
        <Link
        to="/staff"
          className="mb-1"
          style={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#192e35",
          }}
        >
          Staff
        </Link>
      </MDBBox>
    </MDBBox>
  );
};
export default PictName;
