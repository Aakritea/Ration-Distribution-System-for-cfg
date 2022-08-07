import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import SliderImg1 from '../Images/SliderImg1.jpg';
import SliderImg2 from '../Images/SliderImg2.jpg';
import SliderImg3 from '../Images/SliderImg3.jpg';

function Slider() {
  return (
    <div>
        <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={SliderImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Environment</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={SliderImg3}
          alt="Second slide"
        //   style={{height:'47rem'}}
        />
        <Carousel.Caption>
          <h3>Environment</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={SliderImg2}
          alt="Third slide"
        //   style={{height:'47rem'}}
        />
        <Carousel.Caption>
          <h3>Education</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Slider