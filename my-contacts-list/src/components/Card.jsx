import React from "react";
import ReactDOM from "react-dom";
import ContactInfo from "./ContactInfo";

export default function (props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.contactNo}</p>
        <p className="info">{props.email}</p>
      </div>
    </div>
  );
}
