import React, { useEffect, useState } from "react";
import "./style.scss";
import { App_Text } from "../language/English";
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png";
import SearchIcon from "../assets/images/search.png"
import SpclIcon from "../assets/images/spcl.png"
import CariierIcon from "../assets/images/carrier.png"

export default function Header() {
  return (
    <div className="headContainer">
    <nav className="navbar navbar-expand bg-light">
      <div className="container headContent">
        <a className="navbar-brand" href="#">
          <Image
            src={medaversity}
            alt="Picture of the author"
            width={110}
            height={30}
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
          <Image
              src={SpclIcon}
              alt="Spcl Icon"
              className="mt-0"
              width={40}
            />
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
            <li className="nav-item" style={{display: "flex"}}>
            <Image
              src={CariierIcon}
              alt="Spcl Icon"
              className="mt-2"
              width={20}
            />
              <a className="nav-link active" href="#" style={{color: "grey",fontSize: "14px"}}>
                Careers
              </a>
            </li>            
          </ul>
          <div>
            <Image
              src={SearchIcon}
              alt="Picture of the author"
              className="img-fluid me-3 mt-1"
              width={50}
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
    </div>
  );
}
