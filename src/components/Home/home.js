import './home.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (

    <Carousel className="blackCursor " fade>
    <Carousel.Item  id="whiteCursor" >
      <img
        className="d-block w-100 cut"
        src="/assets/Carousel/slide1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>0 1 &nbsp; i t e r s</h3>
        <p>An understanding of the iterative process is crucial for successful design.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100 cut"
        src="/assets/Carousel/slide4.jpg"
        alt="second slide"
      />
      <Carousel.Caption>
        <h3>Wood Court</h3>
        <p>Dedicated spaces for art, furniture, woordwork and sculptures.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100 cut"
        src="/assets/Carousel/slide2.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>Masa Villa</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100 cut"
        src="/assets/Carousel/slide5.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>Coming soon...</h3>
        <p></p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100 cut"
        src="https://cdn.discordapp.com/attachments/910313432258068522/1054516749149671464/07.png"
        alt="third slide"
      />
      <Carousel.Caption>
      <h3>Coming soon...</h3>
        <p></p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100 cut"
        src="/assets/Carousel/slide3.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>KOTOB- PROJECT</h3>
        <p>Product Showcase in different scenarios & color schemes.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100 cut"
        src="/assets/Carousel/slide6.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>Madrid apartment</h3>
        <p>Implementing the concept of minimal design.</p>
      </Carousel.Caption>
      </Carousel.Item>

      </Carousel>

  );
}

export default Home;