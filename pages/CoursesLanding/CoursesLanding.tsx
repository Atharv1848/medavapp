import "./style.scss";
import { LandingHomePage } from "../language/English";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImageCourse from "../assets/images/neurological.png";
import Button from "react-bootstrap/Button";
import Course from "./Course";

const CoursesLanding = () => {
  return (
    <div className="course">
      <div className="d-flex align-items-center justify-content-between">
        <h3>{LandingHomePage["courses"]}</h3>
        <Nav.Link eventKey="link-1">View All</Nav.Link>
      </div>
      <div className="course-list mb-4">
        <Row className="mt-4 ">
          {LandingHomePage["previewCards"].map((item,index) => {
            return(
            <Col lg={4} className="mb-4" key={index+1}>
             <Course item={item} />
            </Col>)})}
        </Row>
      </div>
    </div>
  );
};

export default CoursesLanding;
