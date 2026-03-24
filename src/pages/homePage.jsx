import React, { useRef, useState } from "react";
import { Carousel, Form, Col, Button } from "react-bootstrap";
import "../styles/homePage.css";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import fondoQS from "../assets/fondoQS.jpg";
import imgQS from "../assets/imgQS.JPG";
import fondoQO from "../assets/fondoQO.jpg";
import bloque1 from "../assets/bloque1.jpg";
import { PiTruckThin, PiPackageLight } from "react-icons/pi";
import bloque2 from "../assets/bloque2copia.jpg";
import { GiCoffeeBeans } from "react-icons/gi";
import bloque3 from "../assets/bloque3copia.jpg";
import bloque4 from "../assets/bloque4.jpg";
import imgCF from "../assets/imgCF.jpg";
import fondoFORM from "../assets/fondoFORM.jpg";
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    const serviceID = "service_mps9ner";
    const templateID = "template_b207hl8";
    const publicKey = "YQxzDnV-OZL6zSUlt";

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        alert("¡Propuesta enviada con éxito! Nos contactaremos pronto.");
        e.target.reset();
      },
      (error) => {
        console.log("DETALLE TÉCNICO:", error);
        alert(
          "Lo sentimos, hubo un problema técnico al enviar tu oferta. Por favor, intentá más tarde.",
        );
      },
    );
  };

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
          <button
            id="btnOfreceTuLote"
            onClick={() =>
              document
                .getElementById("seccionForm")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            OFRECÉ TU LOTE
          </button>
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
            <p style={{ color: "#377448", fontSize: "large" }}>
              Agro World Argentina es una empresa dedicada al procesamiento y
              exportación de porotos desde el año 1996.
            </p>
            <p>
              Contamos con plantas de procesamiento y una flota de más de ocho
              camiones que nos permite retirar y acopiar la mercadería
              directamente desde su origen. Posteriormente, el producto es
              procesado y preparado para su exportación.
            </p>
            <p>
              Nos enfocamos en mantener altos estándares de calidad, cumpliendo
              con los requisitos y normativas de los mercados internacionales.
            </p>
          </div>

          <div>
            <img src={imgQS} alt="imagen quienes somos" width={"550px"} />
          </div>
        </div>
      </section>

      <section id="seccionQOfrecemos">
        <img src={fondoQO} alt="fondo ilustraciones QO" width={"100%"} />

        <div id="QO-Container">
          <h2 style={{ marginBottom: "40px" }}>¿Qué Ofrecemos?</h2>
          <p>
            Nos especializamos en el acopio, procesamiento y comercialización de
            porotos provenientes de distintas regiones productivas de Argentina.
            A través de nuestra infraestructura, logística y experiencia en el
            sector, trabajamos para garantizar un proceso eficiente desde la
            recepción de la mercadería hasta su preparación para los mercados
            internacionales.
          </p>
        </div>
      </section>

      <section className="bloques-Section">
        <div id="bloque1-Container">
          <img src={bloque1} alt="bloque1" width={"100%"} />
          <div className="contenidosBloques">
            <PiTruckThin
              style={{ color: "white", marginBottom: "20px" }}
              size={"80px"}
            />
            <p style={{ fontSize: "1.2rem" }}>RECEPCIÓN Y ACOPIO </p>
            <p style={{ fontSize: "1.2rem" }}>DE MERCADERÍA</p>
          </div>
        </div>

        <div id="blosques234-Container">
          <div id="bloque2y3-Container">
            <div id="bloque2-Container">
              <img src={bloque2} alt="bloque2" width={"100%"} />
              <div className="contenidosBloques">
                <GiCoffeeBeans
                  style={{ color: "white", marginBottom: "20px" }}
                  size={"80px"}
                />
                <p style={{ fontSize: "1.2rem" }}>PROCESAMIENTO EN</p>
                <p style={{ fontSize: "1.2rem" }}>PLANTA</p>
              </div>
            </div>

            <div id="bloque3-Container">
              <img src={bloque3} alt="bloque3" width={"100%"} />
              <div className="contenidosBloques">
                <PiPackageLight
                  style={{ color: "white", marginBottom: "20px" }}
                  size={"80px"}
                />
                <p style={{ fontSize: "1.2rem" }}>LOGÍSTICA Y</p>
                <p style={{ fontSize: "1.2rem" }}>TRANSPORTE</p>
              </div>
            </div>
          </div>

          {/* <div>
            <img src={bloque4} alt="bloque4" width={"30%"} />
            <div className="contenidosBloques">
              <GiCoffeeBeans
                style={{ color: "white", marginBottom: "20px" }}
                size={"50px"}
              />
              <p>PROCESAMIENTO EN</p>
              <p>PLANTA</p>
            </div>
          </div> */}
        </div>
      </section>

      <section>
        <img src={imgCF} alt="" width={"100%"} />
      </section>

      <section id="seccionForm">
        <img src={fondoFORM} alt="" width={"100%"} />

        <div id="formContainer">
          <h2>Ofrecé Tu Lote De Porotos</h2>
          <p>
            Completá el formulario y nuestro equipo comercial evaluará tu
            propuesta.
          </p>

          <Form ref={form} onSubmit={enviarEmail}>
            <Form.Group className="mb-3" controlId="formGroupName">
              <Form.Label>Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                name="nombre_completo"
                placeholder="Ingrese Nombre y Apellido"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupNumber">
              <Form.Label>Teléfono / WhatsApp</Form.Label>
              <Form.Control
                type="number"
                name="telefono"
                className="no-arrows"
                placeholder="Ingrese Teléfono"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email_contacto"
                placeholder="Ingrese Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupProvincia">
              <Form.Label>Provincia / Localidad</Form.Label>
              <Form.Control
                type="text"
                name="provincia_localidad"
                placeholder="Ingrese Provincia / Localidad"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="d-block">Tipo de poroto</Form.Label>

              <Form.Check
                inline
                type="radio"
                label="Negro"
                name="grupo_poroto"
                value="negro"
                id="p1"
                required
              />
              <Form.Check
                inline
                type="radio"
                label="Mung"
                name="grupo_poroto"
                value="mung"
                id="p2"
              />
              <Form.Check
                inline
                type="radio"
                label="Todas las anteriores"
                name="grupo_poroto"
                value="todas"
                id="p3"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupCantidad">
              <Form.Label> Cantidad aproximada (toneladas)</Form.Label>
              <Form.Control
                type="number"
                name="cantidad_tn"
                className="no-arrows"
                placeholder="Ingrese cantidad"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupProcNat">
              <Form.Check
                inline
                type="radio"
                label="Procesado"
                name="estado_poroto"
                value="procesado"
                id="e1"
                required
              />
              <Form.Check
                inline
                type="radio"
                label="Natural"
                name="estado_poroto"
                value="natural"
                id="e2"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGroupFechaCosecha">
              <Form.Label className="d-block">Fecha de cosecha</Form.Label>

              <Form.Check
                inline
                type="radio"
                label="2024"
                name="grupo_cosecha"
                value="2024"
                id="c2024"
                required
              />
              <Form.Check
                inline
                type="radio"
                label="2025"
                name="grupo_cosecha"
                value="2025"
                id="c2025"
              />
              <Form.Check
                inline
                type="radio"
                label="2026"
                name="grupo_cosecha"
                value="2026"
                id="c2026"
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Enviar información
            </Button>
          </Form>
        </div>
      </section>
    </section>
  );
}
