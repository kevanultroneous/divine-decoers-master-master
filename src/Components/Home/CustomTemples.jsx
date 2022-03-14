import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTemplesForLimit } from "../../Api/api";
import Loader from "../../Components/common/Loader"
import { customTempleList, TempleLink } from "../../common/common";
import LabelOfContent from "../common/LabelOfContent";
import ProductCard from "../Products/ProductCard";
const CustomTemples = () => {
  const navigate = useNavigate()
  const [templeData,setTempleData] = useState([])
  const [loader,setLoader] = useState(true)
  useEffect(()=>{
    TemplesApi()
  },[])
  const TemplesApi = () =>{
    getTemplesForLimit()
    .then((response)=>{
      setTempleData(response.data.data)
      setLoader(false)
    })
    .catch((error)=>console.log(error))
  }
  
  const handleNavigate = () => {
    navigate('/customtemples')
  }
  return (
    <div className="Paddings-Top-Contain">
      <LabelOfContent title={"Custom Temples"} />
      <Row className="justify-content-center mx-lg-5">
        {
          loader ? <Loader /> :
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
      <Row className="text-center mt-5">
        <Col lg="12">
          <div className="btn btn-primary" onClick={() => handleNavigate()}>View All</div>
        </Col>
      </Row>
    </div>
  );
};
export default CustomTemples;
