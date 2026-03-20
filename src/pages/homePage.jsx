import React, { useState } from "react";
import { Carousel, Button } from "react-bootstrap";
import "../styles/homePage.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import fondoQS from "../assets/fondoQS.jpg";
import imgQS from "../assets/imgQS.JPG";

export default function HomePage() {
  return (
    <section>
      <section id="seccioncarrusel">
        <div id="tituloSuperpuesto">
          <h1>
            <p>¿TE INTERESA VENDER</p>
            <p>TUS LOTES DE POROTOS?</p>
          </h1>
          <h4>
            <p>Enviá la información de tu lote y nuestro equipo evaluará</p>
            <p>la propuesta para su posible comercialización.</p>
          </h4>
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

      <section id="seccionQuienesSomos">
        <img src={fondoQS} alt="fondo ilustraciones 1" width={"100%"} />

        <div id="QS-Container">
          <div id="textoQS-Container">
            <h2>¿Quiénes Somos?</h2>
            <p style={{color:"#377448", fontSize:"large"}}>
              Agro World Argentina es una empresa dedicada al procesamiento y
              exportación de porotos desde el año 1996.
            </p>
            <p >
              Contamos con plantas de procesamiento y una flota de más de ocho
              camiones que nos permite retirar y acopiar la mercadería
              directamente desde su origen. Posteriormente, el producto es
              procesado y preparado para su exportación.
            </p>
            <p >
              Nos enfocamos en mantener altos estándares de calidad, cumpliendo
              con los requisitos y normativas de los mercados internacionales.
            </p>
          </div>

          <div>
            <img src={imgQS} alt="imagen quienes somos" width={"550px"} />
          </div>
        </div>
      </section>
    </section>
  );
}
