import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import contacts from "../contacts";

function ContactInfo() {
  return contacts.map((info) => (
    <Card
      key={info.name}
      name={info.name}
      img={info.imgURL}
      contactNo={info.phone}
      email={info.email}
    />
  ));
}
export default ContactInfo;
