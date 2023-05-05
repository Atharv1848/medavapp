"use client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
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
