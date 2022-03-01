import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTemplesForLimit } from "../../Api/api";
import { customTempleList } from "../../common/common";
import LabelOfContent from "../common/LabelOfContent";
import ProductCard from "../Products/ProductCard";
const CustomTemples = () => {
  const navigate = useNavigate()
  const [templeData,setTempleData] = useState([])

  useEffect(()=>{
    TemplesApi()
  },[])
  const TemplesApi = () =>{
    getTemplesForLimit()
    .then((response)=>setTempleData(response.data.data))
    .catch((error)=>console.log(error))
  }
  
  const handleNavigate = () => {
    navigate('/customtemples')
  }
  return (
    <>
      <LabelOfContent title={"Custom Temples"} />
      <Row className="justify-content-center mx-lg-5">
        {
          templeData ? 
          templeData.map((value, index) =>
            <ProductCard
              iditem={value._id}
              key={index}
              image={value.image[0]}
              name={value.name}
              price={value.price}
            />
          )
          : <h1>No data</h1>
        }
      </Row>
      <Row className="text-center mt-5">
        <Col lg="12">
          <div className="btn btn-primary" onClick={() => handleNavigate()}>View All</div>
        </Col>
      </Row>
    </>
  );
};
export default CustomTemples;
