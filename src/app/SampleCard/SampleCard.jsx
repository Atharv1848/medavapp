import React from "react";
import Image from "next/image";
import medaversity from "../assets/images/default.png";

function SampleCard() {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <Image
        className="card-img-top"
        src={medaversity}
        alt="Picture of the author"
        width={450}
        height={200}
      />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text" style={{ color: "grey" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <p> Some Description...</p>
      </div>
    </div>
  );
}

export default SampleCard;
