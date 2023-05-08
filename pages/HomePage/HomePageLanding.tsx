import React from "react";
import SliderCards from "../SliderCards/SliderCards";
import "./style.scss";
import { LandingHomePage } from "../language/English";
import { Container, Row, Col } from "react-bootstrap";
import Course from "../Courses/Courses"
import { useRouter } from "next/navigation";
const HomePageLanding = () => {
  const router =useRouter();
  const routing =(e:any)=>{
    e.preventDefault()
    router.push('/CourseDetail/CousreDetail')
  }
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
        </Row>
      </Container>
    </div>
  );
};

export default HomePageLanding;
