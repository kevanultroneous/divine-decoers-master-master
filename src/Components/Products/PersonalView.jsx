import { useEffect, useState } from "react"
import { Button, Col, Image, Modal, Row } from "react-bootstrap"
import { findId, FrameLink, sliderRes, TempleLink } from "../../common/common"
import Slider from "react-slick/lib/slider"
import InquireForm from "./InquireForm"
import rightA from "../../Assets/images/r-a.png"
import leftA from "../../Assets/images/l-a.png"
import { useNavigate, useParams } from "react-router-dom"
import { GetTempleById } from "../../Api/api"
import Loader from "../common/Loader"

const PersonalView = () => {
    const params = useParams()
    // const [product_information, setProduct_information] = useState(personalViewList.information)
    // const [sliderArray, setSliderArray] = useState(personalViewList.images)
    const [selectedItm, setSelectedItem] = useState('')
    const [hItem, setHItem] = useState('')
    const [dis, setDis] = useState('none')
    const [inf, setInf] = useState(false)
    const [networkData, setNetworkData] = useState({})
    const [templename, setTemplename] = useState('')
    const [loader, setLoader] = useState(true)
    const [modalImage,setModalImage] = useState('')
    const [imageModel,setImageModel] = useState(false)
    const catchId = findId(params.templeid)
    const [dval, setDval] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        window.addEventListener('scroll', (event) => {
            console.log(window.scrollY)
            if (window.scrollY > 500) {
                setDval('17%')
            } else {
                setDval('')
            }
        })
    })
    useEffect(() => {
        NetworkDataFetch()
        // console.log(networkData)

    }, [])
    useEffect(() => {
        NetworkDataFetch()
        window.scrollTo(0, 0)
        // console.log(networkData)
    }, [params])
    const NetworkDataFetch = () => {
        GetTempleById(params.templeid)
            .then((response) => {
                setNetworkData(response.data)
                setTemplename(response.data.data.name)
                setLoader(false)
            })
            .catch((error) => alert(error.message))
    }
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: sliderRes,
        nextArrow: <Image src={rightA} height={200} />,
        prevArrow: <Image src={leftA} />
    };
    const onHoverAction = (img) => {
        setDis('block')
        setHItem(img)
    }
    const onHoverOutAction = () => {
        setDis('none')
        setHItem('')
    }
    // const ModalImgV = (p) => {
    //     return (
    //         <div className="mv position-absolute m-mv" style={{ display: p.display, marginTop: p.dymicdown }}>
    //             <Image src={p.pl} height={300} />
    //         </div>
    //     )
    // }

    return (
        <>
            <Modal
                size="sm"
                show={imageModel}
                onHide={() => setImageModel(false)}
                centered
                aria-labelledby="example-modal-sizes-title-sm"
            >
               
                <Modal.Body>
                    <Image src={modalImage} height={'300px'} width={'100%'}/>
                </Modal.Body>
            </Modal>
            {
                params.templeid === 'undefined' || !params.templeid ?
                    navigate('/') :
                    <>
                        <InquireForm
                            templename={templename}
                            showIm={inf}
                            frameno={selectedItm}
                            hide={() => setInf(false)}
                        />
                        {
                            loader ? <Loader />
                                :
                                <>
                                    <Row className="mt-5 mb-5 ">
                                        <Col xl={5} lg={5} xs={12}>
                                            <Slider {...settings} className="mt-4 me-xl-5 ms-xl-5 mb-5 ms-md-2 me-md-2">
                                                {
                                                    networkData.data.image.map((value, index) =>
                                                        <div className="card p-0 border-0" key={index}>
                                                            <Image src={value} className="card-img-top" alt="" />
                                                        </div>
                                                    )
                                                }
                                            </Slider>
                                        </Col>
                                        <Col xs={12} xl={6} lg={6}>
                                            <div className="row mt-xl-4 ms-md-2">
                                                <div className="col-12">
                                                    <label className="p-font">{networkData.data.name}</label>
                                                </div>
                                                <div className="col-12">
                                                    <p className="p-font-sub">{networkData.data.price + "$"}</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="p-font-sub2">Available :
                                                        <span style={{ color: '#EB8E88' }}>{networkData.data.stock !== "yes" ? " Out of Stock" : " In Stock"}</span> </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="p-sub-para w-100">{networkData.data.information}</p>
                                                </div>
                                            </div>
                                            {/* <ModalImgV pl={hItem} display={dis} dymicdown={dval} /> */}
                                            <p style={{ color: '#44233B' }} className="fw-700 ms-md-3 mt-md-3">Select your Frame/Pillar</p>
                                            <div className="row ms-xl-3 ms-3 mt-5 ">
                                                {networkData.doc.map((v, i) =>
                                                    <Col xl={2}
                                                        xs={4} md={2} className="p-0" key={i}>
                                                        <label
                                                            onClick={()=>{
                                                                setImageModel(true)
                                                                setModalImage(v.frameimage)
                                                            }}
                                                            // onMouseLeave={() => onHoverOutAction()}
                                                            // onMouseEnter={() => onHoverAction(v.frameimage)}
                                                            >
                                                            <input
                                                                type="radio"
                                                                name="test"
                                                                value={v.framename}
                                                                onChange={(e) =>
                                                                    setSelectedItem(e.target.value)
                                                                } />
                                                            <Image
                                                                src={v.frameimage}
                                                                height={88}
                                                                width={82.43} />
                                                            <p className="text-center fw-400 fs-12 mt-3">{v.framename}</p>
                                                        </label>
                                                    </Col>
                                                )}
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="d-flex justify-content-center justify-content-xl-start ">
                                                    <Button className=" mt-3 btn btn-primary ms-xl-3"
                                                        disabled={selectedItm ? false : true}
                                                        onClick={() => setInf(true)}>Inquire Now</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5 mb-5 me-xl-5 ms-xl-5  ms-md-2">
                                        <Col className="p-0">
                                            <label className="fw-bold list-font">Product Information</label>
                                            <ul className="mt-5 ps-4">
                                                {networkData.data.productInformation.map((v, i) => <li className="list-font" key={i}>{v}</li>)}
                                            </ul>
                                        </Col>
                                    </Row>
                                </>
                        }
                    </>
            }

        </>
    )
}
export default PersonalView