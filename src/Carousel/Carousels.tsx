import Slider, { Settings } from "react-slick";
import banner1 from "../img/banner1.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";
// import banner4 from "../img/banner4.png";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousels.css";

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

function SampleNextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex"}}
      onClick={onClick}
    />
  );
}

export function Carousels() {
  const settings: Settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    
  };

  return (
    <div className="container-carousel">
      
      <Slider {...settings}>
        <div className="card">
          <img src={banner1} alt="Imagem 1"  className="img-card-carousel"/>
        </div>
        <div className="card">
          <img src={banner2} alt="Imagem 2" className="img-card-carousel" />
        </div>
        <div className="card">
          <img src={banner3} alt="Imagem 3"  className="img-card-carousel"/>
        </div>
        {/* <div className="card">
          <img src={banner4} alt="Imagem 4" className="img-card-carousel" />
        </div> */}
     
      </Slider>
    
    </div>
  );
}
