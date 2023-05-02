import React, { useEffect, useState } from "react";
import "./style.scss";
import { App_Text } from "../language/English";
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png";
import BackIcon from "../assets/images/back.png";

export default function Header() {
  return (
    <nav className="navbar navbar-expand bg-light">
      <div className="container headContent">

        <a className="navbar-brand" href="#">
          <Image
            src={medaversity}
            alt="Picture of the author"
            width={80}
            height={20}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto ">
          <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="speciality"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{color: "grey",fontSize: "14px"}}
              >
                Speciality
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#" style={{color: "grey",fontSize: "14px"}}>
                Careers
              </a>
            </li>            
          </ul>
          <div>
            <Image
              src={BackIcon}
              alt="Picture of the author"
              className="img-fluid me-3 mt-1"
              width={20}
            />
            <button type="button" className="signup">
              Sign up
            </button>
            <button type="button" className="login">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
