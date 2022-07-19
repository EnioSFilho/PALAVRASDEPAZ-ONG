import React, { useState } from 'react';
import {  Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators,  CarouselCaption} from 'reactstrap';



const items = [
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/doacao.edd6239c.png',
    
    caption: 'Enio',
    altText: 'Desenvolvedor Front-End',
    
   
    id: 1
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    caption: 'Slide 2',
    altText: 'Slide 2',
    
    id: 2
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    id: 3
  }
];

const Colaboradores = (props:any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex: any) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      
      <CarouselItem
        className="custom-tag"
        tag="div"
        id={item.src}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption className="text-light" captionText={item.altText} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style className='ajuste'>
        {
          `.custom-tag {
              text-align: center;
              max-width: 100%;
              height: 279px;
              background: #00A97E;
              
            }`
        }
      </style>
      
      <h5 style={{textAlign: "center", color: "#00A97E", backgroundColor: "#f7f6f6", margin: 0}}>Nós somos um grupo de voluntários unidos pelo desejo de promover soluções sustentáveis visando a paz e prosperidade humana.</h5>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      
    </div>
  );
}

export default Colaboradores;