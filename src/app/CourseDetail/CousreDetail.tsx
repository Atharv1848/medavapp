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
import badgeIcon from "../assets/images/badge.png";
import shareIcon from "../assets/images/share.png";
import BackIcon from "../assets/images/back.png";
import InviteCard from "../SampleCard/InviteCard";
import CourseRating from "../components/CourseRating";
import BatchComponent from "../components/BatchComponent";

export default function CousreDetail() {
  return (
    <div className="jumbotron detailContainer">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 mt-2">
            <div className="d-flex align-items-center mb-3 gap-3">
              <div className="arrow-icon">
                <Image src={BackIcon} alt="Picture of the author" width={20} />
              </div>
              <div className="felloship-btn">Fellowship</div>
            </div>
            <h2 className="courseTitle">{App_Text["headerText"]}</h2>
            <p className="courseDesc">{App_Text["ParagraphText"]}</p>
            <div className="row">
              <div className="col-sm-12 mt-4 mb-4">
                <CourseRating />
              </div>
              <div className="col-sm-12 mt-4 mb-4">
                <BatchComponent />
              </div>
              <div className="col-sm-6 mt-4 mb-4">
                <div className="modal1 d-flex gap-3">
                  <Modal2 />
                  <Modal1 />
                </div>
              </div>
              <div className="col-sm-4 col-12 mt-4 mb-4">
                <div className="right-image">
                  <span>
                    <Image
                      src={badgeIcon}
                      alt="Picture of the author"
                      width={40}
                      height={40}
                    />
                  </span>
                  <Image
                    src={shareIcon}
                    alt="Picture of the author"
                    width={40}
                    height={40}
                    className="ms-3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <Video />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-sm-8 mt-2">
            <KeyFeatures />
            <Description />
            <Faqs />
          </div>
          <div className="col-sm-4 mt-2">
            <InviteCard />
            <InviteCard />
            <InviteCard />
          </div>
        </div>
      </div>
    </div>
  );
}
