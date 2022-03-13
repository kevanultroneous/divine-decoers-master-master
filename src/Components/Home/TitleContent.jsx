import { Col, Container, Image, Row } from "react-bootstrap";
import bg from "../../Assets/images/background.png"
import DivineNavbar from "../common/Navbar";
const TitleContent = (props) => {
  return (
    <Row className="back-image under-content">
     <Col lg={6} xl={4} md={8} xs={12} className="mt-4">
          <div className="title-level-1 fw-500">Bringing Your</div>
          <div className="title-level-2 fw-700">Tradition Home</div>
          <div className="title-level-3 fw-500 me-xl-5 me-xs-0">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <div className="btn btn-primary">Inquire Now</div>
        </Col>
    </Row>
    // <div className="banner-image w-100 vh-100 d-flex justify-content-center">
    //   <Row className="  under-content">
   
    //   </Row>
    // </div>
  );
};
export default TitleContent;
