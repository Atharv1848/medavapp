import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import { Button } from "react-bootstrap";
import ImageCourse from "../assets/images/neurological.png";
import Image from "next/image";
import { LandingHomePage } from "../language/English";

const SlickSlider = ({ routing }: any) => {
  const Settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <>
      <Slider {...Settings}>
        {LandingHomePage["SliderCards"].map((item) => {
          return (
            <div className="box-one course-box">
              <div className="card-top">
                <div className="course-image">
                  <Image
                    src={ImageCourse}
                    alt="Picture of the author"
                    className="img-fluid"
                  />
                </div>
                <div className="badge-position">
                  <span className="badge">{item.courseType}</span>
                </div>
              </div>
              <div className="mt-3">
                <h6>{item.Title}</h6>
                <div className="text-end">
                  <span>{item.months}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <Button className="preview-btn btn-one" onClick={routing}>
                      {item.button}
                    </Button>
                  </div>
                  <div>{item.Rating}</div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlickSlider;
