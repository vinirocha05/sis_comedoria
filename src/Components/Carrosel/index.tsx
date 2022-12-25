import { Carrosel } from './styles';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarroselContainer() {
  const fotos = [
    { id: 1, foto: 'foto_lanche_veg.jpg' },
    { id: 2, foto: 'foto_croissant.jpg' },
    { id: 3, foto: 'foto_lanche.jpg' },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Carrosel>
      <Slider {...settings}>
        {fotos.map((item) => (
          <img key={item.id} src={`/assets/${item.foto}`} />
        ))}
      </Slider>
    </Carrosel>
  );
}
