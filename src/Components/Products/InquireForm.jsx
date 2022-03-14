import { useState } from "react"
import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import close from "../../Assets/images/close.png"
import validator from 'validator';
import { InquireNow } from "../../Api/api";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
const Inputs = (p) => {
    return (
        <Row className="mt-4 mb-3">
            <Col xl={12}>
                <label className="fs-16 fw-600">{p.name}</label>
            </Col>
            <Col xl={12}>
                <input
                    disabled={p.lock}
                    value={p.value}
                    onChange={p.change}
                    className="in-form w-100 p-2"
                    placeholder={p.placeholder}
                    type={p.type} />
            </Col>
            <Col xl={12}>
                <label className="fs-16 fw-600" style={{ color: '#DB4242', display: p.errorshow }}>{p.error}</label>
            </Col>
        </Row>
    )
}
const InquireForm = (props) => {

    const [cs, setCs] = useState(true)
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [number, setNumber] = useState('')
    const [frame, setFrame] = useState('')
    const [width, setWidth] = useState('')
    const [height, setHeight] = useState('')
    const [Depth, setDepth] = useState('')
    const [des, setDes] = useState('')

    const [nameE, setNameE] = useState('none')
    const [mailE, setMailE] = useState('none')
    const [numberE, setNumberE] = useState('none')
    const [frameE, setFrameE] = useState('none')
    const [sizeE, setSizeE] = useState('none')
    const [desE, setDesE] = useState('none')
    const InquireApi = () => {
        const obj = {
            "name":name,
            "templename":props.templename,
            "email":mail,
            "phone":number,
            "frame":props.frameno,
            "width":width,
            "height":height,
            "depth":Depth,
            "description":des
        }
        console.log(obj)
        InquireNow(obj)
            .then((response) => {
                console.log(response)
                if (response.data.status) {
                    clearAll()
                    return true
                }
            })
            .catch((e) => alert(e.message))
    }
    const handleForm = () => {
        clearError()
        if (validator.isEmpty(name) || name.length <= 2) {
            setCs(true)
            setNameE('block')
        }
        else if (validator.isEmpty(mail) || !validator.isEmail(mail)) {
            setCs(true)
            setMailE('block')
        }
        // else if (validator.isEmpty(number) || !validator.isMobilePhone(number)) {
        //     setCs(true)
        //     setNumberE('block')
        // }
        else if (
            (validator.isEmpty(width) || isNaN(width)) ||
            (validator.isEmpty(height) || isNaN(height)) ||
            (validator.isEmpty(Depth) || isNaN(Depth))) {
            setCs(true)
            setSizeE('block')
        }
        else if (validator.isEmpty(des)) {
            setCs(true)
            setDesE('block')
        } else {
            setCs(false)
          
        }
    }
    const clearError = () => {
        setNameE('none')
        setMailE('none')
        setNumberE('none')
      
        setSizeE('none')
        setDesE('none')
    }
    const clearAll = () => {
        setName('')
        setMail('')
        setNumber('')
        setFrame('')
        setHeight('')
        setWidth('')
        setDepth('')
        setDes('')
    }
    const navigate = useNavigate()
    const submitForm = () => {
        handleForm()
        if(cs === false){
            InquireApi()
            navigate('/thankyou')
        }
    }
    return (
        <Modal
            show={props.showIm}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="p-5" style={{ background: '#FFEFE2', borderRadius: '12px' }}>

                <div className="text-end">
                    <Image src={close} height={35} onClick={props.hide} />
                </div>
                <Row>
                    <Col>
                        <div>
                            <label className="fw-700 in-from-hd">
                                Inquire Now
                            </label>
                        </div>
                        <div>
                            <label className="fw-500 in-form-para">
                                Please fill out the following form and we will contact you soon.
                            </label>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-4 mb-3">
                    <Col>
                        <label className="fw-700 in-form-sub">{props.templename}</label>
                    </Col>
                </Row>

                <Inputs
                    name="Name*"
                    type="text"
                    error="Enter Valid Name"
                    placeholder="Enter Name"
                    value={name}
                    change={(e) => setName(e.target.value)}
                    errorshow={nameE}
                />
                <Inputs
                    name="Email Address*"
                    type="email"
                    value={mail}
                    change={(e) => setMail(e.target.value)}
                    placeholder="Enter email address"
                    error="Enter valid Email"
                    errorshow={mailE}
                />
                <Row className="mt-4 mb-3">
                    <Col xl={12}>
                        <label className="fs-16 fw-600">Phone number</label>
                    </Col>
                    <Col xl={12}>
                        <PhoneInput
                         
                            countryCodeEditable={false}
                            enableSearch={true}
                            country={'au'}
                            value={ number}
                            onChange={phone => setNumber(phone)}
                        />
                    </Col>
                    <Col xl={12}>
                        <label className="fs-16 fw-600" style={{ color: '#DB4242', display: numberE }}>Enter valid Phone number</label>
                    </Col>
                </Row>
                <Inputs
                    name="Frame/Pillar Number*"
                    type="text"
                    lock={true}
                    value={props.frameno}
                    placeholder="Enter Frame/Pillar Number"
                  
                />
                <Row >
                    <Col xl={12}>
                        <label className="fs-16 fw-600">Size* (in cms)</label>
                    </Col>
                    <Col xl={4}>
                        <input
                            className="in-form p-2"
                            placeholder="Width : "
                            type="text"
                            value={width}
                            onChange={(e) => setWidth(e.target.value)}
                        />
                    </Col>
                    <Col xl={4}>
                        <input
                            className="in-form p-2"
                            placeholder="Height : "
                            type="text"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)} />
                    </Col>
                    <Col xl={4}>
                        <input
                            className="in-form p-2"
                            placeholder="Depth : "
                            type="text"
                            value={Depth}
                            onChange={(e) => setDepth(e.target.value)} />
                    </Col>
                    <Col xl={12}>
                        <label className="fs-16 fw-600" style={{ color: '#DB4242', display: sizeE }}>
                           Enter valid Information
                        </label>
                    </Col>
                </Row>
                <Row className="mt-4 mb-3">
                    <Col xl={12} className="fs-16 fw-600">
                        <label className="fw-700">Description</label>
                    </Col>
                    <Col xl={12}>
                        <textarea
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            placeholder="Type here..." className="in-form p-3 w-100">
                        </textarea>
                    </Col>
                    <Col xl={12}>
                        <label className="fs-16 fw-600" style={{ color: '#DB4242', display: desE }}>
                            Required *
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className=" mt-3 btn btn-primary" onClick={() => submitForm()}>Submit</Button>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    )
}
export default InquireForm