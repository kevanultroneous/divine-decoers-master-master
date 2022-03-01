import { Col, Container, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import heart from "../Assets/images/heart.png"
const ThankYou = () => {
    return (
        <Container fluid style={{ background: '#FFEFE2' ,height:'100vh'}} className="parent">
                <Row className="justify-content-center child">
                    <Col xl={2} xs={10}>
                        <Image src={heart} className="text-center"/>
                    </Col>
                    <Col xl={12} xs={12}className="mt-5">
                        <div className="fw-600 fs-1 text-center thks">Thank You</div>
                    </Col>
                    <Col xl={12} xs={12} className="mt-5">
                        <p className="text-center fw-500 thks-p">We have received your request. Our team will get back to you soon</p>
                    </Col>
                    <Col xl={12} className="text-center">
                        <Link to="/" style={{ color: '#DB4242' }}>Go Back to home</Link>
                    </Col>
                </Row>
        </Container>
    )
}
export default ThankYou