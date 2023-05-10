import "./style.scss"
import { LandingHomePage } from "../language/English";
import {Row, Col } from "react-bootstrap";
const ExperienceCard = () => {
    return(
        <div>
            <h2 className="text-center pt-5 mb-5">{LandingHomePage["simulationTitle"]}</h2>
            <Row>
                <Col lg={4}>
                 <div className="experience-card">
                 <h2 className="count ">1500+</h2>
                 <h3>Medical Cases</h3>
                 <p>Interactive case studies for precise diagnosis and customized treatment plans.</p>
                 </div>
               </Col>
               <Col lg={4}>
                 <div className="experience-card">
                 <h2 className="count ">1500+</h2>
                 <h3>Medical Cases</h3>
                 <p>Interactive case studies for precise diagnosis and customized treatment plans.</p>
                 </div>
               </Col>
               <Col lg={4}>
                 <div className="experience-card">
                 <h2 className="count ">1500+</h2>
                 <h3>Medical Cases</h3>
                 <p>Interactive case studies for precise diagnosis and customized treatment plans.</p>
                 </div>
               </Col>
            </Row>
        </div>
    )
}

export default ExperienceCard;
