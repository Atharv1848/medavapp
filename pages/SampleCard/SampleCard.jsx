import React from "react";
import Image from "next/image";
import ClockIcon from "../assets/images/ClockIcon.png";
import BriefCaseIcon from "../assets/images/BriefCaseIcon.png";
import CertificateIcon from "../assets/images/CertificateIcon.png";
import DownloadIcon from "../assets/images/DownloadIcon.png";
import PDFIcon from "../assets/images/PDFIcon.png";
import "./style.scss";

function SampleCard() {
  return (
    <div className="card mb-4 mr-2">
      <div className="card-body">
        <div className="whitebgNpadding">
          <h6 className="card-title">
            <Image
              src={ClockIcon}
              alt="Picture of the author"
              className="img-fluid ms-2 mt-1"
              width={30}
            />
            Duration
          </h6>
        </div>
        <div className="whitebgNpadding">
          <h5 className="card-title">
            <Image
              src={BriefCaseIcon}
              alt="Picture of the author"
              className="img-fluid ms-2 mt-1"
              width={30}
            />
            Sample Certificate
          </h5>
          <p className="card-text" style={{ color: "grey" }}>
            <Image
              src={CertificateIcon}
              alt="Picture of the author"
              className="img-fluid ms-2 mt-1"
              width={250}
            />
          </p>
        </div>
        <div className="whitebgNpadding">
          <h6> Cousre Eligibility</h6>
          <ul>
            <li>MD/MS/DNB</li>
            <li>MBBS</li>
          </ul>
        </div>
        <div className="whitebgNpadding">
          <h6 className="card-title">
            <Image
              src={PDFIcon}
              alt="Picture of the author"
              className="img-fluid ms-2 mt-1 mr-1"
              width={30}
            />
            Brouchure Download
            <Image
              src={DownloadIcon}
              alt="Picture of the author"
              className="img-fluid ms-2 mt-1"
              width={30}
            />
          </h6>
        </div>
      </div>
    </div>
  );
}

export default SampleCard;
