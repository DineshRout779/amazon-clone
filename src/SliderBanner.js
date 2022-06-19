import Slider from 'react-slick';
import './SliderBanner.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const data = [
  {
    id: 1,
    img: 'img-1.jpg',
  },
  {
    id: 2,
    img: 'img-2.jpg',
  },
  {
    id: 3,
    img: 'img-3.jpg',
  },
  {
    id: 4,
    img: 'img-4.jpg',
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    />
  );
}

const SliderBanner = () => {
  return (
    <div style={{ minHeight: '100vh' }} className='slider-banner'>
      <Slider {...settings}>
        {data.map((card, index) => (
          <div key={index}>
            <div style={{ minHeight: '100vh' }}>
              <img
                className='home__image'
                src={'./imgs/' + card.img}
                alt='amazon_home'
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default SliderBanner;
