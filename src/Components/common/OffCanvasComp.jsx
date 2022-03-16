import { Col, Image, Offcanvas, Row } from "react-bootstrap";
import { RiMessage2Fill } from "react-icons/ri";
import close from "../../Assets/images/close.png"

const OffCanvasComp = (props) => {
  return (
    <Offcanvas show={props.show} onHide={props.hide} placement="end" style={{ background: '#FFEFE2' }}>
      <Offcanvas.Body>
        <Row className="text-end mt-3 mx-5 mx-xl-1">
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
              For more information on customization and product details. Give us a call or drop a message and we will revert you back.
            </p>
          </Col>
        </Row>
        <div className="offcanvas-contact-list-padding">
          <Row className="mt-5 ms-3">
            <Col>
              <p className="m-0">Whats app</p>
              <p>
              <a href="https://wa.me/+61403260924"
                target="_blank"
              style={{textDecoration:'none' ,color:'#44243B'}}>+61 403 260 924</a></p>
            </Col>
          </Row>
          <Row className="mt-3 ms-3">
            <Col>
              <p className="m-0">Email</p>
              <p>sales@divinedecores.com.au</p>
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