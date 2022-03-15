import { Col, Image, Offcanvas, Row } from "react-bootstrap";
import { RiMessage2Fill } from "react-icons/ri";
import close from "../../Assets/images/close.png"

const OffCanvasComp = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.hide} placement="end" style={{ background: '#FFEFE2' }}>
      <Offcanvas.Body>
        <Row className="text-end mt-3 mx-5">
          <Col>
            <Image src={close} height="45px" onClick={props.onClose} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <div className="row mx-3">
              <div className="col-1 oc-fonts">
                <RiMessage2Fill />
              </div>
              <div className="col oc-fonts2">Lets Talk</div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="para-divider">
              Lorem Ipsum has been the
              industry's standard dummy
              text ever since the 1500s,
              when an unknown printer
              took a galley of type and
              scrambled it to make a type
              specimen book.
            </p>
          </Col>
        </Row>
        <div className="pt-5">
          <Row className="mt-5 ms-3">
            <Col>
              <p className="m-0">Whats app</p>
              <p>+61 403 260 924</p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-3 ms-4">
              <p className="ms-2 mb-0">Call</p>
              <p className="m-0">+61 403 260 924</p>
            </Col>
          </Row>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
export default OffCanvasComp;