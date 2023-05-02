import React from "react";
import Image from "next/image";
import GroupSrc from "../assets/images/group.png";
import ShareBlueIcon from "../assets/images/share-blue.png"

function SampleCard() {
  return (
    <div className="card mb-4 mr-2">
      <div className="card-body">
      <Image
        className="card-img-top"
        src={GroupSrc}
        alt="Picture of the author"  
        width={200}      
      />
        <h5 className="card-title">Invite your Friends</h5>
        <p className="card-text" style={{ color: "grey" }}>
        Enroll in the best Medvarsity courses and grow your skills
        </p>
        <div className="d-flex align-items-center">
        <a href="#" target="_blank" style={{textDecoration: "none",color: "#57577d",fontWeight: "700"}}>Invite Now</a>
        <Image       
        src={ShareBlueIcon}
        alt="Picture of the author"   
        className="img-fluid ms-2 mt-1"
        width={15}
       />
        </div>
      </div>
    </div>
  );
}

export default SampleCard;
