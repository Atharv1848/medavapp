import React from "react";
import "./style.scss";
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png"


export default function Footer() {
  return (
    <div className=" footContainer">
      <div className="container">
        <footer className="py-5">
          <div className="row">
            <div className="col-3">
              <div style={{backgroundColor: "#fff",padding: "20px",borderRadius: "20px",width: "200px"}}> 
              <Image
                src={medaversity}
                alt="Picture of the author"
                width={160}
                height={50}
              />
              </div>
              
            </div>

            <div className="col-3">
              <h5>Company Info</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    About Us
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Assimilate
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Careers
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Books & Journal
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-3">
              <h5>legal </h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Financial Support
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-muted">
                    Help & Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" py-4 my-4 border-top">
            <h6>Fellowship courses</h6>
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
