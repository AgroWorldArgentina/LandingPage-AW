import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "../styles/homePage.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";

export default function HomePage() {
  return (
    <section>
      <section id="seccioncarrusel">
        <div id="tituloSuperpuesto">
          <h1>
            <p>¿TE INTERESA VENDER</p>
            <p>TUS LOTES DE POROTOS?</p>
          </h1>
          <h3>
            <p>Enviá la información de tu lote y nuestro equipo evaluará</p>
            <p>la propuesta para su posible comercialización.</p>
          </h3>
          <button id="btnOfreceTuLote">OFRECÉ TU LOTE</button>
        </div>
        <Carousel fade>
          <Carousel.Item>
            <img src={slide1} alt="slide1" width={"100%"} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide2} alt="slide2" width={"100%"} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide3} alt="slide3" width={"100%"} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={slide4} alt="slide4" width={"100%"} />
          </Carousel.Item>
        </Carousel>
      </section>
    </section>
  );
}
