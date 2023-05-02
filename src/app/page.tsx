"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CourseDetail from "./CourseDetail/CousreDetail";
export default function Home() {
  return (
    <>
      <Header />
      <CourseDetail />
      <Footer />
    </>
  );
}
