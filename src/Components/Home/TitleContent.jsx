import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const TitleContent = (props) => {
  return (
      
    <Row className="back-image under-content">
     <Col lg={6} xl={4} md={8} xs={12} className="ms-md-5  m-0 me-xl-5 Padding-Title Title-Space">
          <div className="title-level-1 fw-500 p-0">Decor Home with</div>
          <div className="title-level-2 fw-700">Spiritual Diviness</div>
          <div className="title-level-3 fw-500 me-xl-5 me-xs-0">
            <p className="mt-3">
            Celebrate the  journey of Peacefulness, Holiness, Mysticism & Religiosity with our handcrafted temples & Decors.
            </p>
          </div>
          <Link to="/customtemples">
          <div className="btn btn-primary mt-3">Our Products</div>
          </Link>
        </Col>
    </Row>
  );
};
export default TitleContent;
