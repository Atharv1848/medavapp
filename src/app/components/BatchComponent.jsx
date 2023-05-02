import React from "react";

export default function BatchComponent() {
  return (
    <div className="row">
      <div className="col-sm-2">
        <p style={{fontSize: "12px"}}>Next Batch From</p>
        <p style={{fontSize: "19px",fontWeight: 800}}>8 May 2023</p>
      </div>
      <div className="col-sm-4">
        <p style={{fontSize: "12px"}}>Couse Price</p>
        <p style={{fontSize: "19px",fontWeight: 800}}>
         <span style={{fontSize: "12px",marginRight: "10px"}}>Emi Starting</span> 
        Rs 16,167 *</p>
      </div>
    </div>
  );
}
