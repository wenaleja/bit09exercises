import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
export const Inicio = () => {
  return (
    <section>
      <h1 className='text-center py-5 text-info'> Bienvenidos</h1>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wenaleja.github.io/bit07me/img/imagen1.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='bg-primary'>Wendy Alejandra Carlos Muñoz</h3>
          <p className='text-info bg-light'>Desarrolladora Front</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    
  )
}
