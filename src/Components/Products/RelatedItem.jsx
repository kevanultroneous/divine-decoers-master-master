import { useRef } from "react";
import { Col, Image, Row } from "react-bootstrap"
import Slider from "react-slick/lib/slider";
import { customTempleList, sliderRes } from "../../common/common";
import LabelWithChild from "../common/LabelWithChild";

const RelatedItem = () => {
  const sliderRef = useRef()
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: sliderRes
  };
  return (
    <>
      <LabelWithChild
        title="Related Product"
        next={() => sliderRef.current.slickPrev()}
        prev={() => sliderRef.current.slickNext()}
      />
      <Row className="justify-content-center">
        <Col xl={12} md={12} lg={12}>
          <Slider {...settings} ref={sliderRef} className="mt-4 me-xl-5 ms-xl-5 me-md-5 ms-md-5 mb-5">
            {
              customTempleList.map((value, index) =>
                <div className="card p-0 border-0 w-75 w-xl-100 w-md-100">
                  <Image src={value.image} className="card-img-top" alt="" />
                  <div className="card-img-overlay overlay overlay-m">
                    <div className="row">
                      <div className="col-8 col-xl-8 col-lg-8 col-md-8 col-xs-6 position-absolute bottom-0 mb-2 text-white fw-700 fs-15">
                        {value.name}
                      </div>
                      <div className="col-4 col-xl-4 col-lg-4 col-md-4  position-absolute bottom-0 end-0 text-end mb-2 text-white fw-700 fs-15">
                        {value.price}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </Slider>
        </Col>
      </Row>
    </>
  );
}
export default RelatedItem