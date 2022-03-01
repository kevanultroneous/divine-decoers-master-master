import { Col, FormControl, Image, InputGroup, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import image from "../../Assets/images/icon2.png";
const Footer = () => {
  return (

    <Row className="footer-back p-5 justify-content-center">
      <Col lg="3" xl="3" md="5">
        <div>
          <Image src={image} />
          <p className="text-white mt-3 fw-500">
            497 Evergreen Rd. Roseville, CA 95673
            <br />+44 345 678***
            <br />XYZ@gmail.com
          </p>
        </div>
      </Col>
      <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3 mb-3">
        <div className="fw-700">About Us</div>
        <div className="fw-700 mt-xl-3 mt-3">Contact Us</div>
        <div className="fw-700 mt-xl-3 mt-3">Terms & Conditions</div>
      </Col>
      <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3 mb-3 ">
        <div className="row">
          <div className="col-2 text-end">
            <FaFacebookF />
          </div>
          <div className="col-2 fw-700">Facebook</div>
        </div>
        <div className="row mt-2">
          <div className="col-2 text-end">
            <AiFillInstagram />
          </div>
          <div className="col-2 fw-700">Instagram</div>
        </div>
      </Col>
      <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3">
        <div className="fw-700">Subscribe to our newsletter</div>
        <InputGroup className="mb-3 mt-3 w-100">
          <FormControl
            className="email-input text-white"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Text id="basic-addon2 " className="email-btn">Submit</InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Footer;
