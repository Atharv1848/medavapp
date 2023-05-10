import React from "react";
import SliderCards from "../SliderCards/SliderCards";
import "./style.scss";
import "../../pages/assets/css/main.scss";
import { LandingHomePage } from "../language/English";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../CoursesLanding/CoursesLanding";
import { useRouter } from "next/navigation";
import Nav from "react-bootstrap/Nav";
import SlickSlider from "../slickSlider/slickSlider"
import Image from "next/image";
import ImageCourse from "../../pages/assets/images/neurological.png";
import Checkbox from "../../pages/assets/images/check-mark.png";
import Button from "react-bootstrap/Button";
import ExperienceCard from "../ExperiecceCard/ExperienceCard"

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
              <h2 className="mb-3">{LandingHomePage["homePageTitle"]}</h2>
              <div className="skills mb-2">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <Image
                      src={Checkbox}
                      alt="Picture of the author"
                      className="img-fluid"
                      width={20}
                    />
                  </div>
                  <div>
                    <span>{LandingHomePage["MedavNumbers"]["AlumnisNumbers"]}</span>
                    <span className="ms-1">{LandingHomePage["MedavNumbers"]["AlumnisTitle"]}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <Image
                      src={Checkbox}
                      alt="Picture of the author"
                      className="img-fluid"
                      width={20}
                    />
                  </div>
                  <div>
                    <span>{LandingHomePage["MedavNumbers"]["CountriesNumbers"]}</span>
                    <span className="ms-1">{LandingHomePage["MedavNumbers"]["learnersTitle"]}</span>
                  </div>
                </div>
              </div>
              <div className="skills mb-2">
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <Image
                      src={Checkbox}
                      alt="Picture of the author"
                      className="img-fluid"
                      width={20}
                    />
                  </div>
                  <div>
                    <span>{LandingHomePage["MedavNumbers"]["AlumnisNumbers"]}</span>
                    <span className="ms-1">{LandingHomePage["MedavNumbers"]["AlumnisTitle"]}</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div>
                    <Image
                      src={Checkbox}
                      alt="Picture of the author"
                      className="img-fluid"
                      width={20}
                    />
                  </div>
                  <div>
                    <span>{LandingHomePage["MedavNumbers"]["CountriesNumbers"]}</span>
                    <span className="ms-1">{LandingHomePage["MedavNumbers"]["learnersTitle"]}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={9} className="">
            <SlickSlider routing={routing} />
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
                <h6>{LandingHomePage["featuredCard"].title}</h6>
                <div className="text-end">
                  <span>{LandingHomePage["featuredCard"].months}</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <Button className="preview-btn btn-one">{LandingHomePage["featuredCard"].button}</Button>
                  </div>
                  <div>{LandingHomePage["featuredCard"].Rating}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="light-bg">
        <Container>
          <ExperienceCard />
        </Container>
      </div>
    </div>
  );
};

export default HomePageLanding;
