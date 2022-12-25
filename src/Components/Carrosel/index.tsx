import { Carrosel } from './styles';
import { useRef, useState } from 'react';

import Carousel from 'react-elastic-carousel';

export default function CarroselContainer() {
  const [fotos, setFotos] = useState([
    { id: 1, foto: 'foto_lanche_veg.jpg' },
    { id: 2, foto: 'foto_croissant.jpg' },
    { id: 3, foto: 'foto_lanche.jpg' },
  ]);
  const carouselRef = useRef(null); // declare at state level
  let resetTimeout;
  return (
    <Carrosel>
      <Carousel
        isRTL
        enableAutoPlay
        autoPlaySpeed={4000}
        onNextEnd={({ index }) => {
          console.log('index', index, fotos.length);
          if (index === fotos.length - 1) {
            clearTimeout(resetTimeout);
            resetTimeout = setTimeout(() => {
              carouselRef?.current?.goTo(0);
            }, 1000); // same time
          }
        }}
      >
        {fotos.map((item) => (
          <img key={item.id} src={`/assets/${item.foto}`} />
        ))}
      </Carousel>
    </Carrosel>
  );
}
