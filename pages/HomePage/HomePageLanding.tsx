import React from "react";
import SliderCards from "../SliderCards/SliderCards";
import "./style.scss";
import "../../pages/assets/css/main.scss";
import { LandingHomePage } from "../language/English";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../Courses/Courses";
import { useRouter } from "next/navigation";
import Nav from "react-bootstrap/Nav";

import Image from "next/image";
import ImageCourse from "../../pages/assets/images/neurological.png";
import Button from "react-bootstrap/Button";

const HomePageLanding = () => {
  const router = useRouter();
  const routing = (e: any) => {
    e.preventDefault();
    router.push("/CourseDetail/CousreDetail");
  };
  return (
    <div className="landing">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="left-title">
              <h2 className="">{LandingHomePage["homePageTitle"]}</h2>
            </div>
          </Col>
          <Col lg={9} className="">
            {LandingHomePage["SliderCards"].map((item) => {
              return (
                <SliderCards
                  title={item.Title}
                  Rating={item.Rating}
                  button={item.button}
                  months={item.months}
                  courseType={item.courseType}
                  routing={routing}
                />
              );
            })}
          </Col>
        </Row>

        <Row>
          <Col lg={8}>
            <Course />
          </Col>
          <Col lg={4}>
            <div className="d-flex align-items-center justify-content-between">
              <h3>{LandingHomePage["featured"]}</h3>
              <Nav.Link eventKey="link-1">View All</Nav.Link>
            </div>
            <div className="box-one course-box mt-3 min-heigh770">
              <div className="card-top">
                <div className="course-image">
                  <Image
                    src={ImageCourse}
                    alt="Picture of the author"
                    className="img-fluid"
                  />
                </div>
                <span className="badge position-relative mt-4">Fellowship</span>
              </div>
              <div className="mt-3">
                <h6>Sports Rehabilitation with Contact Program</h6>
                <div className="text-end">
                  <span>6 Month</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <Button className="preview-btn btn-one">Preview</Button>
                  </div>
                  <div>5</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageLanding;
