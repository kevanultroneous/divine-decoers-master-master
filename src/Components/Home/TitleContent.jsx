import { Col, Container, Image, Row } from "react-bootstrap";
import bg from "../../Assets/images/background.png"
import DivineNavbar from "../common/Navbar";
const TitleContent = (props) => {
  return (
    <Container fluid className="background-home back-img-size">
      {props.headings}
      <Row className="justify-content-xl-end justify-content-lg-end under-content">
        <Col lg={6} xl={4} md={8} xs={12}className="mt-xl-5 m-xs-0 m-lg-5 mt-md-5 mt-lg-5">
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
    </Container>
  );
};
export default TitleContent;
