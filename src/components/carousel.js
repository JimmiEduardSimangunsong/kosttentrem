import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/tailwind.css';
import ktidur from "../asset/images/slide/ktidur.jpg";
import kmandi from "../asset/images/slide/kmandi.png";
import taman from "../asset/images/slide/taman.png";

function CarouselFade() {
  return (
    <Carousel fade interval={2000}>
      <Carousel.Item>
        <img
          className="h-72 w-full object-cover"
          src={taman}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-72 w-full object-cover"
          src={ktidur}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-72 w-full object-cover"
          src={kmandi}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;