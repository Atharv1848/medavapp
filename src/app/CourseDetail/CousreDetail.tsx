import React from "react";
import Image from "next/image";
import Modal1 from "../Modal1/Modal1";
import Modal2 from "../Modal2/Modal2";
import Video from "../video/video";
import "./style.scss";
import { App_Text } from "../language/English";
import Faqs from "../faq/faqs";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import Description from "../Description/Description";
import SampleCard from "../SampleCard/SampleCard";
import badgeIcon from "../assets/images/badge.png"
import shareIcon from "../assets/images/share.png"

export default function CousreDetail() {
  return (
    <div className="jumbotron detailContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mt-2">
            <h1>{App_Text["headerText"]}</h1>
            <p className="courseDesc">{App_Text["ParagraphText"]}</p>
            <div className="row">
              <div className="col-sm-4">
                <div className="modal1">
                  <Modal2 />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="modal1">
                  <Modal1 />
                </div>
              </div>
              <div className="col-sm-4">
                <span style={{marginRight: "50px"}}>
                  <Image
                  src={badgeIcon}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                /></span>                
                <Image
                  src={shareIcon}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                </div>
            </div>
          </div>
          <div className="col-sm-4 vedio">
            <Video />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 mt-2">
            <KeyFeatures />
          </div>
          <div className="col-sm-4 mt-2">
           <SampleCard />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 mt-2">
            <Description />
        </div>
        <div className="col-sm-4 mt-2">
           <SampleCard />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 mt-2">
          <Faqs />
        </div>
        <div className="col-sm-4 mt-2">
           <SampleCard />
          </div>
        </div>
      </div>
    </div>
  );
}
