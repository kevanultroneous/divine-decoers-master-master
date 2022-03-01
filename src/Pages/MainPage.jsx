import { useRef } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import AboutUs from "../Components/Home/AboutUs";
import CustomTemples from "../Components/Home/CustomTemples";
import Footer from "../Components/common/Footer";
import TestiMonial from "../Components/Home/TestiMonial";
import TitleContent from "../Components/Home/TitleContent";
import DivineNavbar from "../Components/common/Navbar"
import bg from "../Assets/images/background.png"
const MainPage = () => {
  return (
    <>
  
      <TitleContent headings={<DivineNavbar />} />
      <Container fluid className="back-contain">
        <CustomTemples />
        <div id="about">
          <AboutUs />
        </div>
        <TestiMonial />
        <Footer />
      </Container>
    </>
  );
};
export default MainPage;
