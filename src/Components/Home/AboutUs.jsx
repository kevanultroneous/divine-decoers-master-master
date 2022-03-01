import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import LabelOfContent from "../common/LabelOfContent";
import { getAboutus } from "../../Api/api"
const AboutUs = () => {
  const [about, setAbout] = useState([])
  const getData = () => {
    return getAboutus()
      .then((res) => setAbout(res.data.data))
      .catch((e) => console.log(e.message))
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <LabelOfContent title={"About Us"} />
      <Row className="mt-3" >
        <Col lg="12">
          <p className="paragraph ms-xl-5 me-xl-5 ms-md-5 me-md-5">
            {
              about ?
                about.map((v) => <p>{v.text}</p>) : <h1>No data loded</h1>
            }
          </p>
        </Col>
      </Row>
    </>
  );
};
export default AboutUs;
