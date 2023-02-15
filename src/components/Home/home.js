import './home.css';
import Carousel from 'react-bootstrap/Carousel';
import slideData from './slides';
import { Fragment, useEffect, useState } from 'react';
import Footer from '../footer/footer';
import OutlineCard from '../cards/outlineCard/outlineCard'
import Grid from '../grid/grid';
function Home() {
  const [slides , setSlides] = useState([]);
  useEffect(()=>{
    setSlides(slideData)
  },[])
  let teaserCardsData = [
    {
      title:"Projects",
      shortDescription:"Look at our selected projects that shows our theme",
      id:"teaserCards"
    },
    {      
      title:"Services",
      shortDescription:"Have a look at the collection of services may they be of help to you",
      id:"teaserCards"

    },
    {      
      title:"Courses",
      shortDescription:"Have a look at the collection of services may they be of help to you",
      id:"teaserCards"

    },
    {      
      title:"Contact",
      shortDescription:"Have a look at the collection of services may they be of help to you",
      id:"teaserCards"

    }
  ]
  return (
    <div className='contain'>


    <Carousel className="blackCursor " fade>
      {slides.map((slide,index) =>(
      <Carousel.Item key={index}>
        <img
          className="d-block w-100 cut"
          id= {slide.id !== undefined? slide.id : null}
          src={slide.src}
          alt={index + "slide"}
        />
        <Carousel.Caption>
          <h3>{slide.quote.title}</h3>
          <p>{slide.quote.body}</p>
        </Carousel.Caption>
        </Carousel.Item>)
      )}


      </Carousel>

      <Grid 
      type={OutlineCard}
      cards={teaserCardsData}
      gridID="homeGrid"
      />

      <Footer />
      </div>

  );
}

export default Home;