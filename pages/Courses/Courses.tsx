import "./style.scss";
import { LandingHomePage } from "../language/English";
import Nav from 'react-bootstrap/Nav';
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import ImageCourse from "../assets/images/neurological.png"
import Button from 'react-bootstrap/Button';

const Course = () => {
    return (
        <div className="course">
            <div className="d-flex align-items-center justify-content-between">
                <h3>{LandingHomePage["courses"]}</h3>
                <Nav.Link eventKey="link-1">View All</Nav.Link>
            </div>
            <div className="course-list mt-3">
                <Row>
                    <Col lg={4}>
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
                                    <span className="badge">Fellowship</span>
                                </div>
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
                    <Col lg={4}>
                        <div className="box-two course-box">
                            <div className="card-top">
                                <div className="course-image">
                                    <Image
                                        src={ImageCourse}
                                        alt="Picture of the author"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="badge-position">
                                    <span className="badge">Fellowship</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6>Sports Rehabilitation with Contact Program</h6>
                                <div className="text-end">
                                    <span>6 Month</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <Button className="preview-btn btn-two">Preview</Button>
                                    </div>
                                    <div>5</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box-three course-box">
                            <div className="card-top">
                                <div className="course-image">
                                    <Image
                                        src={ImageCourse}
                                        alt="Picture of the author"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="badge-position">
                                    <span className="badge">Fellowship</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6>Sports Rehabilitation with Contact Program</h6>
                                <div className="text-end">
                                    <span>6 Month</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <Button className="preview-btn btn-two">Preview</Button>
                                    </div>
                                    <div>5</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 mb-5">
                    <Col lg={4}>
                        <div className="box-four course-box">
                            <div className="card-top">
                                <div className="course-image">
                                    <Image
                                        src={ImageCourse}
                                        alt="Picture of the author"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="badge-position">
                                    <span className="badge">Fellowship</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6>Sports Rehabilitation with Contact Program</h6>
                                <div className="text-end">
                                    <span>6 Month</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <Button className="preview-btn btn-four">Preview</Button>
                                    </div>
                                    <div>5</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box-five course-box">
                            <div className="card-top">
                                <div className="course-image">
                                    <Image
                                        src={ImageCourse}
                                        alt="Picture of the author"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="badge-position">
                                    <span className="badge">Fellowship</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6>Sports Rehabilitation with Contact Program</h6>
                                <div className="text-end">
                                    <span>6 Month</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <Button className="preview-btn btn-five">Preview</Button>
                                    </div>
                                    <div>5</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="box-six course-box">
                            <div className="card-top">
                                <div className="course-image">
                                    <Image
                                        src={ImageCourse}
                                        alt="Picture of the author"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="badge-position">
                                    <span className="badge">Fellowship</span>
                                </div>
                            </div>
                            <div className="mt-3">
                                <h6>Sports Rehabilitation with Contact Program</h6>
                                <div className="text-end">
                                    <span>6 Month</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>
                                        <Button className="preview-btn btn-six">Preview</Button>
                                    </div>
                                    <div>5</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>

        </div>
    )
}

export default Course;