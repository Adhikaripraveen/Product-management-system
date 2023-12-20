import React from "react";
import Nav from "./Nav";
import Companies from "../E-commerce";
import { Link } from "react-router-dom";
const ListProduct = () => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex" }}>
        <Nav />
        <div style={{ width: "82%", height: "fit-content" }}>
         <div className="app">
         {Companies.map((val, ind) => {
  return (
    <div className="card" key={ind}>
      <img src={val.image} alt={val.name} />
      <h3>{val.name}</h3>
      <p>{val.about}</p>
     <Link to={val.link} target="_blank"><button>List Product</button></Link> 
    </div>
  );
})}
         </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
