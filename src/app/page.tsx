"use client"
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useEffect } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CourseDetail from "./CourseDetail/CousreDetail"






export default function Home() {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  
  return (
    <>
      <Header />
      <CourseDetail />
      <Footer />
    </>
  );
}
