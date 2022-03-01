import { useEffect, useState } from "react"
import { Button, Col, Image, Row } from "react-bootstrap"
import { personalViewList, sliderRes } from "../../common/common"
import Slider from "react-slick/lib/slider"
import InquireForm from "./InquireForm"
import rightA from "../../Assets/images/r-a.png"
import leftA from "../../Assets/images/l-a.png"
import { useNavigate, useParams } from "react-router-dom"
import { getTemplesById } from "../../Api/api"

const PersonalView = () => {
    const params = useParams()
    const [product_information, setProduct_information] = useState(personalViewList.information)
    const [sliderArray, setSliderArray] = useState(personalViewList.images)
    const [selectedItm, setSelectedItem] = useState('')
    const [hItem, setHItem] = useState('')
    const [dis, setDis] = useState('none')
    const [inf, setInf] = useState(false)
    const [networkData, setNetworkData] = useState({})

    const navigate = useNavigate()
    useEffect(() => {
        NetworkDataFetch()
    }, [])
    const NetworkDataFetch = () => {
        getTemplesById(params.templeid)
            .then((response) => setNetworkData(response.data))
            .catch((error) => console.log(error.message))
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
    const ModalImgV = (p) => {
        return (
            <div className="mv position-absolute m-mv" style={{ display: p.display }}>
                <Image src={p.pl} height={250} />
            </div>
        )
    }
    return (
        <>
            {
                params.templeid === 'undefined' || !params.templeid ?
                    navigate('/') :
                    <>
                        <InquireForm
                            showIm={inf}
                            hide={() => setInf(false)}
                        />
                        {
                            networkData.status !== "success" ? <h1>No data</h1>
                                :
                                <>
                                    <Row className="mt-3 mb-5 ms-xl-5">
                                        <Col xl={5} lg={5} xs={12}>
                                            <Slider {...settings} className="mt-4 me-xl-5 ms-xl-5 mb-5">
                                                {
                                                    networkData.data.image.map((value, index) =>
                                                        <div className="card p-0 border-0" key={index}>
                                                            <Image src={value} className="card-img-top" alt="" />
                                                        </div>
                                                    )
                                                }
                                            </Slider>
                                        </Col>
                                        <Col xs={12} xl={5} lg={6}>
                                            <div className="row mt-xl-4">
                                                <div className="col-12">
                                                    <label className="p-font">{networkData.data.name}</label>
                                                </div>
                                                <div className="col-12">
                                                    <p className="p-font-sub">{networkData.data.price+"$"}</p>
                                                </div>
                                                {/* {params.templeid} */}
                                                <div className="col-12">
                                                    <p className="p-font-sub2">Available :
                                                    <span style={{color:'#EB8E88'}}>{networkData.data.stock!=="yes" ?  " Out of Stock":" In Stock" }</span> </p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="p-sub-para w-100">{networkData.data.information}</p>
                                                </div>
                                            </div>
                                            <ModalImgV pl={hItem} display={dis} />
                                            <p style={{ color: '#44233B' }} className="fw-700">Select your Frame/Pillar</p>
                                            <div className="row ms-xl-3 ms-3 mt-5">
                                                {personalViewList.pillers.map((v, i) =>
                                                    <Col xl={2} xs={4} md={2} className="p-0" key={i}>
                                                        <label
                                                            onMouseLeave={() => onHoverOutAction()}
                                                            onMouseEnter={() => onHoverAction(v.img)}>
                                                            <input
                                                                type="radio"
                                                                name="test"
                                                                value={v.img}
                                                                onChange={(e) => setSelectedItem(e.target.value)} />
                                                            <Image src={v.img} />
                                                            <p className="text-center fw-400 fs-12 mt-3">{v.nm}</p>
                                                        </label>
                                                    </Col>
                                                )}
                                            </div>
                                            <div className="row justify-content-center">
                                                <div className="col-9 col-xl-12 col-md-12 ms-md-5">
                                                    <Button className=" mt-3 btn btn-primary" disabled={selectedItm ? false : true} onClick={() => setInf(true)}>Inquire Now</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-5 mb-5 me-xl-5 ms-xl-5">
                                        <Col>
                                            <label className="fw-bold list-font">Product Information</label>
                                            <ul className="mt-5">
                                                <li>
                                                    {
                                                        networkData.data.productInformation
                                                    }
                                                </li>
                                                {/* {product_information.map((v, i) => <li className="list-font" key={i}>{v}</li>)} */}
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