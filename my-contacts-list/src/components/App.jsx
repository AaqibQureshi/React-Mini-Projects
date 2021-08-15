import React from "react";
import ReactDOM from "react-dom";
// import Card from "./Card";
// import contacts from "../contacts";
import ContactInfo from "./ContactInfo";
// function Info(info) {
//   return (
//     //contacts.map((info) => (
//     <Card
//       key={info.name}
//       name={info.name}
//       img={info.imgURL}
//       contactNo={info.phone}
//       email={info.email}
//     />
//     //)
//   );
// }
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <ContactInfo />
      {/* <Info /> */}
      {/* {contacts.map(Info)} */}
    </div>
  );
}

export default App;
