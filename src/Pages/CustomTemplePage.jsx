import { useEffect, useState } from "react";
import { Col, Container,  Row } from "react-bootstrap"
import {  getTemplesPagignate } from "../Api/api";
import { TempleLink } from "../common/common";
import Footer from "../Components/common/Footer";
import LabelOfContent from "../Components/common/LabelOfContent";
import Loader from "../Components/common/Loader";
import DivineNavbar from "../Components/common/Navbar"
import ProductCard from "../Components/Products/ProductCard";

const CustomTemplePage = () => {
    const [templeData, setTempleData] = useState([])
    const [page, setPage] = useState(1)
    const [dataCount,setDataCount] = useState(0)
    const [btnS,setBtnS] = useState('')
    const [loader,setLoader] = useState(true)
    useEffect(() => {
        TemplesApi()
    }, [])
    const TemplesApi = () => {
        getTemplesPagignate(page, 8)
            .then((response) => {
                setDataCount(response.data.total_documents)
                setTempleData(response.data.data)
                setLoader(false)
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    const SeeMore = () => {
        setPage(page + 1)
    }
    useEffect(() => {
        getTemplesPagignate(page, 8)
            .then((response) => setTempleData(templeData.concat(response.data.data)))
            .catch((error) => alert(error))
    }, [page])

    return (
        <Container fluid className="back-contain Paddings-Top-Contain">
            {
               loader ? 
                <Loader/>
                :
                <>
                 <DivineNavbar />
            <LabelOfContent title="Custom Temples" />
            <Row className="justify-content-center mx-lg-5 mb-5">
                {
                    templeData.map((value, index) =>
                        <ProductCard
                            iditem={value._id}
                            key={index}
                            image={TempleLink+value.image[0]}
                            name={value.name}
                            price={value.price}
                        />
                    )
                }
            </Row>
            <Row className="text-center mt-5 mb-5">
                <Col lg="12">
                    <div className="btn btn-primary" onClick={() => SeeMore()} style={{display:btnS}}>See More</div>
                </Col>
            </Row>
            <Footer />
                </>
             }
        </Container>
    )
}
export default CustomTemplePage;