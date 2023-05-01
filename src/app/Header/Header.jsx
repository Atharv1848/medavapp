import React from "react";
import "./style.scss";
import { App_Text } from "../language/English";
import Image from "next/image";
import medaversity from "../assets/images/medaversitylogo-47.png";

export default function Header() {
  return (
    <nav className="headContainer navbar navbar-expand  justify-content-between bg-light">
      <div className="container-fluid headContent">
        <a className="navbar-brand" href="#">
          <Image
            src={medaversity}
            alt="Picture of the author"
            width={100}
            height={30}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
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
          </ul>
            <button type="button" className="signup">
              Login
            </button>
            <button type="button" className="signup">
              Sign up
            </button>
        </div>
      </div>
    </nav>
  );
}
