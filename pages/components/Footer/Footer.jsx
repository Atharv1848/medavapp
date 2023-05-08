import React from "react";
import "./style.scss";
import Image from "next/image";
import medaversity from "../../assets/images/medaversitylogo-47.png"
import {App_Text} from "../../language/English"
import {Row, Col} from 'react-bootstrap/';


export default function Footer() {
  return (
    <div className="footContainer">
      <div className="container">
        <footer className="py-5">
          <Row>
            <Col md={4}>
              <div className="footer-logo mb-3"> 
              <Image
                src={medaversity}
                alt="Picture of the author"  
                className="img-fluid"           
              />
              </div>
              
            </Col>
            <Col md={4} className="mb-3">
              <h5>{App_Text["FOOTER_TEXT"]["COMP_INFO_TITLE"]}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                  {App_Text["FOOTER_TEXT"]["COMP_INFO"][0].linkName}                    
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                   {App_Text["FOOTER_TEXT"]["COMP_ASSI"][0].linkName}                                        
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                  {App_Text["FOOTER_TEXT"]["COMP_CAREERS"][0].linkName} 
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                  {App_Text["FOOTER_TEXT"]["COMP_BOOK"][0].linkName} 
                  
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>{App_Text["FOOTER_TEXT"]["LEGAL_TITLE"]} </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">                    
                    {App_Text["FOOTER_TEXT"]["FOOTER_LINKS"][0].linkName}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                  {App_Text["FOOTER_TEXT"]["FOOTER_LINKS"][1].linkName}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                  {App_Text["FOOTER_TEXT"]["FOOTER_LINKS"][2].linkName}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                  {App_Text["FOOTER_TEXT"]["FOOTER_LINKS"][3].linkName}
                  </a>
                </li>
              </ul>
            </Col>
          </Row>

          <div className=" py-4 my-4 border-top">
            <h6>{App_Text["FOOTER_TEXT"]["FELLOWSHIP_TITLE"]}</h6>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not onl
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
