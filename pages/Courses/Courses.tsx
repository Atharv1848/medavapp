import "./style.scss";
import { LandingHomePage } from "../language/English";
import Nav from "react-bootstrap/Nav";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImageCourse from "../assets/images/neurological.png";
import Button from "react-bootstrap/Button";

const Course = () => {
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
                      <Button className="preview-btn btn-one">{item.button}</Button>
                    </div>
                    <div>{item.Rating}</div>
                  </div>
                </div>
              </div>
            </Col>)})}
        </Row>
      </div>
    </div>
  );
};

export default Course;
