import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const TitleContent = (props) => {
  return (
    <Row className="back-image under-content ">
     <Col lg={6} xl={4} md={8} xs={12} className="mt-4">
          <div className="title-level-1 fw-500">Bringing Your</div>
          <div className="title-level-2 fw-700">Tradition Home</div>
          <div className="title-level-3 fw-500 me-xl-5 me-xs-0">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </div>
          <Link to="/customtemples">
          <div className="btn btn-primary">Our Products</div>
          </Link>
        </Col>
    </Row>
  );
};
export default TitleContent;
