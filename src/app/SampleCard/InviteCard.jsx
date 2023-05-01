import React from "react";
import Image from "next/image";
import GroupSrc from "../assets/images/group.png";
import BackIcon from "../assets/images/back.png"

function InviteCard() {
  return (
    <div className="card mb-4 mr-2">
      <div className="card-body">
      <Image
        className="card-img-top"
        src={GroupSrc}
        alt="Picture of the author"        
      />
        <h5 className="card-title">Invite your Friends</h5>
        <p className="card-text" style={{ color: "grey" }}>
        Enroll in the best Medvarsity courses and grow your skills
        </p>
        <div className="d-flex align-items-center">
        <a href="#" target="_blank">Invite Now</a>
        <Image       
        src={BackIcon}
        alt="Picture of the author"   
        className="img-fluid ms-2 mt-1"
        width={15}
       />
        </div>
      </div>
    </div>
  );
}

export default InviteCard;
