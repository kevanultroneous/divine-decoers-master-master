import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { useState } from 'react'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import logo from "../../Assets/images/icon.png";
import call from "../../Assets/images/call.png"
import OffCanvasComp from "./OffCanvasComp";
import { Link, useNavigate } from "react-router-dom";
import menu from "../../Assets/images/menu.png"
import ScrollToTop from "react-scroll-to-top";
const DivineNavbar = () => {
  const [show, setShow] = useState(false)
  const [chngClr, setChmgClr] = useState(false)
  const [ navExpanded,setNavExpanded] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const changeNavbarColor = () => {
    if(navExpanded){
      setNavExpanded(false)
    }
    if (window.scrollY >= 80) {
      setChmgClr(true)
    }
    else {
      setChmgClr(false)
    }
  }
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      <Image src={call} id="myBtn" onClick={() => setShow(true)} />
      <Navbar 
        onToggle={()=>navExpanded ? setNavExpanded(false) : setNavExpanded(true)}
      expand="lg"
       expanded={navExpanded}
        style={{ background: chngClr ? '#FFEFE2' : 'none', transition: '0.5s' }} fixed="top">
        <Container fluid className="p-xl-3 p-md-3 p-lg-3 p-3">
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand href="#" className="ms-md-1 ms-xs-1 ms-xl-5 ms-lg-5 ms-1">
              <Image src={logo} className="icon-size" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" className="border-none">
            <Image src={menu} />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0 nav-fonts" navbarScroll>
              <Link to="/" className="text-decoration-none link-a-nav">
                <Nav.Link href="/" className="nav-link-clr me-xl-5 me-md-5 me-lg-5">
                  Home
                </Nav.Link>
              </Link>
              <Link to="/customtemples" className="text-decoration-none">
                <Nav.Link href="/customtemples" className="me-xl-5 me-md-5 me-lg-5">Products</Nav.Link>
              </Link>
              <Nav.Link href="http://localhost:3000/#about" className="pt-xl-0 pt-lg-0">About Us</Nav.Link>
              <div className="vector ms-5 me-3" />

              <Nav.Link href="https://www.facebook.com/divinedecores/ " className="fs-20" target="_blank">
                <FaFacebookF />
              </Nav.Link>

              <Nav.Link href="https://www.instagram.com/divinedecores/" className="fs-20" target="_blank">
                <AiFillInstagram />
              </Nav.Link>


              <div className="vector me-5 ms-4" />
              <Nav.Link onClick={() => setShow(true)} className="p-0 me-xl-5" id="call-tab-mob">
                <Image src={call} height="45" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <OffCanvasComp
        show={show}
        hide={() => handleClose()}
        onClose={() => handleClose()}
      />
    </>
  );
};
export default DivineNavbar;