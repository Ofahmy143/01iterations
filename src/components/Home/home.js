import './home.css';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (

    <Carousel className="blackCursor" >
    <Carousel.Item  id="whiteCursor" >
      <img
        className="d-block w-100"
        src="/assets/Carousel/slide1.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>0 1 &nbsp;i t e r s</h3>
        <p>An understanding of the iterative process is crucial for successful design.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100"
        src="/assets/Carousel/slide2.jpg"
        alt="second slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100"
        src="/assets/Carousel/slide3.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100"
        src="/assets/Carousel/slide4.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100"
        src="/assets/Carousel/slide5.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
      <img
        className="d-block w-100"
        src="/assets/Carousel/slide6.jpg"
        alt="third slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
      </Carousel.Item>

      </Carousel>

  );
}

export default Home;