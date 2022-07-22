import React, { useState } from 'react';
import {  Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators,  CarouselCaption} from 'reactstrap';



const items = [
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Beatriz.png',
    caption: 'Beatriz',
    altText: 'Mídias Sociais',
    id: 1
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Enio.png',
    caption: 'Enio',
    altText: 'Desenvolvedor Fron-End',
    
    id: 2
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/IveteBelfort.png',
    altText: 'Presidente da ONG Palavras de Paz e Licenciada pela Fundação TPRF',
    caption: 'Ivete Belfort',
    id: 3
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Viniciussouza.png',
    caption: 'Vinicius',
    altText: 'Responsável pela emissão de certificados, declarações dos voluntários e inovações do banco de dados',
    id: 4
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/DaniloJese.png',
    caption: 'Danilo Jese',
    altText: 'Facilitador',
    id: 5
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/AnnaSquadroni.png',
    caption: 'Anna Squadroni Tavernaro',
    altText: 'Responsável pela distribuição de cadernos e homologações de cada turma',
    id: 6
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/camilanascimento.png ',
    caption: 'Camila Nascimento',
    altText: 'Tradutora',
    id: 7
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/homero.png',
    caption: 'Homero',
    altText: 'Facilitador',
    id: 8
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/PaolaSqyadroni.png',
    caption: 'Paola Squadroni',
    altText: 'Coordenação de voluntários',
    id: 9
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Raphael.png',
    caption: 'Raphael',
    altText: 'Facilitador e Operador',
    id: 10
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Bianca.png',
    caption: 'Bianca',
    altText: 'Facilitadora e Operadora',
    id: 11
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Isabella.png',
    caption: 'Isabella Goulart',
    altText: 'Tradutora',
    id: 12
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/TakutaGeane.png',
    caption: 'Talita Geane',
    altText: 'Facilitadora',
    id: 13
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Paulla.png',
    caption: 'Paulla',
    altText: 'Facilitadora',
    id: 14
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Bruna.png',
    caption: 'Bruna',
    altText: 'Facilitadora',
    id: 15
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/CleideDinardi.png',
    caption: 'Cleide Dinardi',
    altText: 'Facilitadora e Coach',
    id: 16
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Lucimar.png',
    caption: 'Lucimar',
    altText: 'Facilitadora e Coach',
    id: 17
  },
  
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Diva.png',
    caption: 'Diva',
    altText: 'Palhaça Voluntária e Coach',
    id: 18
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Diva2.png',
    caption: 'Diva',
    altText: 'Facilitadora',
    id: 19
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Gianfranco.png',
    caption: 'Gianfranco',
    altText: 'TI de todo tráfico de documentos entre prisões',
    id: 20
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Ana.png',
    caption: 'Ana',
    altText: 'Mídias Sociais',
    id: 21
  },
  
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/karinealcantara.png',
    caption: 'Karine Alcântara​​',
    altText: 'Tradutora',
    id: 22
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Zita.png',
    caption: 'Zita',
    altText: ' Estatisticas de Presenças e comparecimentos aos cursos',
    id: 23
  },
 
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/mariastelagomes.png',
    caption: 'Maria Stela Gomes',
    altText: 'Avaliadora de caderno de presos',
    id: 24
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/monica.png',
    caption: 'Mônica',
    altText: ' Facilitadora',
    id: 25
  },
  
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/fernandacarramate.png',
    caption: 'Fernanda Carramate',
    altText: ' Tradutora - Cordenação de Tradução',
    id: 26
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/Paty.png',
    caption: 'Paty',
    altText: 'Mídias Sociais',
    id: 27
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/susane.png',
    caption: 'Susane',
    altText: 'Facilitadora',
    id: 28
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/elisandra.png',
    caption: 'Elisandra',
    altText: 'Suporte e Avaliação de Cadernos',
    id: 29
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/marceloavelar.png',
    caption: 'Marcelo Avelar',
    altText: 'Suporte e Avaliação de Cadernos',
    id: 30
  },
  {
    src: 'http://palavrasdepaz.kinghost.net/assets/colaboradores/talita.png',
    caption: 'Talita Pontes',
    altText: 'Facilitadora',
    id: 31
  },
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