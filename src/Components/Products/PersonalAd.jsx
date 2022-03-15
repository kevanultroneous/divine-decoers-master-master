import { Col, Image, Row } from "react-bootstrap"
import mandir from "../../Assets/images/mandir.png"
const PersonalAd = () => {
    return (
        <Row className="footer-back  justify-content-center mt-2 pb-1">
            <Col xs={11} xl={4} md={6} lg={6} className="mt-3  mb-3 m-xl-0">
                <Image src={mandir} />
            </Col>
            <Col xs={12} xl={6} md={6} lg={6} className="mt-0 mt-md-5 mt-xl-5 mb-3 m-xl-0">
                <label className="text-white fw-600 fs-37 ">Any Temple Can Be Made In Any Size</label>
                <p className="text-white fs-f-20 mt-3">
                    Temple width options 60cm /80cm /100cm /120cm /150cm /180cm /200cm /250cm
                    or custom width like 92cm. Height, depth, colour customisable. Laminates and
                    australian woods used.
                </p>
                <label className="text-white fs-22 fw-700">Order to delivery 10-12 weeks.</label>
            </Col>
        </Row>
    )
}
export default PersonalAd