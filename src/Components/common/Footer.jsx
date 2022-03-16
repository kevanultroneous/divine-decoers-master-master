import { Col, FormControl, Image, InputGroup, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import image from "../../Assets/images/icon2.png";
import {Link} from "react-router-dom"
const Footer = () => {
  return (

    <Row className="footer-back p-5 justify-content-center">
      <Col lg="3" xl="3" md="5">
        <div>
          <Image src={image} />
          <p className="text-white mt-3 fw-500">
          39C, Mandoon Road, Girraween, 2145
            <br />+61 403 260 924
            <br />
            <a href="mailto:sales@divinedecores.com.au"className="link-styles">
            sales@divinedecores.com.au
            </a>
          </p>
        </div>
      </Col>
      <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3 mb-3">
        <div className="fw-700">
          <a href="http://localhost:3000/#about" className="link-styles">
            About Us
            </a>
          </div>
        {/* <div className="fw-700 mt-xl-3 mt-3">
        <Link to="/">
          Contact Us
          </Link>
          </div> */}
        {/* <div className="fw-700 mt-xl-3 mt-3">
      <a href="" className="link-styles">
Terms & Conditions
      </a>
          
       
          </div> */}
      </Col>
      <Col lg="3" xl="3" sm="12" md="5" className="text-white mt-3 mb-3 ">
        <div className="row">
          <div className="col-2 text-end">
            <FaFacebookF />
          </div>
          <div className="col-2 fw-700">
            <a href="https://www.facebook.com/divinedecores/" target="_blank" className="link-styles">
            Facebook
              </a>
            </div>
        </div>
        <div className="row mt-2">
          <div className="col-2 text-end">
            <AiFillInstagram />
          </div>
          <div className="col-2 fw-700">
          <a href="https://www.instagram.com/divinedecores/" target="_blank" className="link-styles">
            Instagram
            </a>
            </div>
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
          <InputGroup.Text id="basic-addon2 " className="email-btn">Subscribe</InputGroup.Text>
        </InputGroup>
      </Col>
    </Row>
  );
};
export default Footer;
