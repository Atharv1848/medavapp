import React from "react";
import SliderCards from "../SliderCards/SliderCards";
import "./style.scss";
import { LandingHomePage } from "../language/English";

const HomePageLanding = () => {
  return (
    <div className="jumbotron homePageLandingContainer">
      <div className="container">
        <h2 className="">{LandingHomePage["homePageTitle"]}</h2>
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
      </div>
    </div>
  );
};

export default HomePageLanding;
