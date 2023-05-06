import React from "react";
import SliderCards from "../SliderCards/SliderCards";
import "./style.scss";
import { LandingHomePage } from "../language/English";
import { Container, Row, Col } from "react-bootstrap";

const HomePageLanding = () => {
  return (
    <div className="landing">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="left-title">
              <h2 className="">{LandingHomePage["homePageTitle"]}</h2>
            </div>
          </Col>
          <Col lg={4}>
            {LandingHomePage["SliderCards"].map((item) => {
              return (
                <SliderCards
                  title={item.Title}
                  Rating={item.Rating}
                  button={item.button}
                  months={item.months}
                  courseType={item.courseType}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageLanding;
