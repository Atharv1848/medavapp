import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CourseDetail from "./CourseDetail/CousreDetail";
import HomePageLanding from "./HomePage/HomePageLanding";
import SignUpApp from "./SignUP/SignUpApp";

const index = () => {
  return (
    <>
      <Header />
      <CourseDetail />
      {/* <HomePageLanding /> */}
      <Footer />
    </>
  );
};

export default index;
