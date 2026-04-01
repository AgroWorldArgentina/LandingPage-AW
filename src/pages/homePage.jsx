import React, { useRef, useState } from "react";
import { Carousel, Form, Button } from "react-bootstrap";
import "../styles/homePage.css";

// --Slides--
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import slide4 from "../assets/slide4.jpg";
import slide5 from "../assets/slide5.jpg";

// --Quienes somos--
import imgQS from "../assets/imgQs.JPG";

// --Que ofrecemos--
import bloque1 from "../assets/bloque1.jpg";
import bloque2 from "../assets/bloque2.jpg";
import bloque3 from "../assets/bloque3.jpg";
import bloque4 from "../assets/bloque4.jpg";
import bloque42 from "../assets/bloque4.2.jpg";
import { PiTruckThin, PiPackageThin } from "react-icons/pi";
import { GiCoffeeBeans } from "react-icons/gi";
import icon4 from "../assets/gradientIcon.png";

// --Formulario--
import emailjs from "@emailjs/browser";

export default function HomePage() {
  const [pasoActual, setPasoActual] = useState(1);

  const pasosInfo = [
    {
      id: 1,
      titulo: "1. Completá el formulario",
      descripcion:
        "Ingresá tus datos y la información básica del lote: ubicación, cantidad aproximada y tipo de poroto. Nuestro equipo recibe la información para comenzar a evaluarla.",
    },

    {
      id: 2,
      titulo: "2. Análisis de la mercadería",
      descripcion:
        "Nos contactamos con vos para conocer más detalles y, si es necesario, coordinamos el calado o análisis de la mercadería para evaluar su calidad.",
    },

    {
      id: 3,
      titulo: "3. Propuesta comercial",
      descripcion:
        "Con la información del lote y el análisis realizado, te presentamos una propuesta de precio y condiciones de compra.",
    },

    {
      id: 4,
      titulo: "4. Coordinación y retiro",
      descripcion:
        "Si avanzamos con la operación, coordinamos la logística para el retiro o traslado de la mercadería hacia nuestra planta.",
    },
  ];

  const irAlPaso = (numero) => {
    setPasoActual(numero);
  };

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
      {/* --- */}

      <section id="carrusel_Seccion">
        <div id="contenidoCarrusel">
          <h1>
            ¿TE INTERESA VENDER
            <br />
            TUS LOTES DE POROTOS?
          </h1>

          <h4>
            Enviá la información de tu lote y nuestro equipo evaluará la
            propuesta para su posible comercialización.
          </h4>

          <button
            id="btnOfreceLote"
            onClick={() =>
              document
                .getElementById("OLote_Seccion")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            OFRECÉ TU LOTE
          </button>
        </div>

        <Carousel slide={false} indicators={false} fade={true}>
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

          <Carousel.Item>
            <img src={slide5} alt="slide5" width={"100%"} />
          </Carousel.Item>
        </Carousel>
      </section>

      {/* --- */}

      <section id="quienesSomos_Seccion">

        <div id="QS_Container">
          <div id="textoQS_Container">
            <h2>¿Quiénes Somos?</h2>
            <p
              style={{
                color: "#377448",
                fontSize: "1.1rem",
                marginBottom: "30px",
              }}
            >
              Agro World Argentina es una empresa dedicada al procesamiento y
              exportación de porotos desde el año 1996.
            </p>
            <p style={{ marginBottom: "30px" }}>
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

          <div id="imgQS_Container">
            <img id="imgQS" src={imgQS} alt="imagen quienes somos" />
          </div>
        </div>
      </section>

      {/* --- */}

      <section id="queOfrecemos_Seccion">
        <div id="QO_Container">
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

      <section id="section_Bloques">
        <div className="container_Bloque bloque_1">
          <img
            src={bloque1}
            alt="Recepción y acopio de mercadería"
            width={"100%"}
            className="img_Bloque"
          />
          <div className="contenido_Bloque">
            <PiTruckThin className="iconos_Bloques" />
            <p style={{ fontSize: "1.2rem" }}>RECEPCIÓN Y ACOPIO </p>
            <p style={{ fontSize: "1.2rem" }}>DE MERCADERÍA</p>
          </div>
          <div className="contenidoHover_Bloque">
            <PiTruckThin className="iconos_Bloques" />
            <p>RECEPCIÓN Y ACOPIO </p>
            <p>DE MERCADERÍA</p>
            <br />
            <div className="textoHover">
              <p>
                Recibimos lotes de porotos provenientes de distintas provincias
                y coordinamos el retiro mediante nuestra flota de camiones.
              </p>
            </div>
          </div>
        </div>

        <div id="container_Bloque234">
          <div id="container_Bloque2y3">
            <div className="container_Bloque">
              <img
                src={bloque2}
                alt="Procesamiento en planta"
                width={"100%"}
                className="img_Bloque"
              />
              <div className="contenido_Bloque">
                <GiCoffeeBeans className="iconos_Bloques" />
                <p style={{ fontSize: "1.2rem" }}>PROCESAMIENTO EN</p>
                <p style={{ fontSize: "1.2rem" }}>PLANTA</p>
              </div>
              <div className="contenidoHover_Bloque">
                <GiCoffeeBeans className="iconos_Bloques" />
                <p>PROCESAMIENTO EN</p>
                <p>PLANTA</p>
                <br />
                <div className="textoHover">
                  <p>
                    Los porotos pasan por procesos de limpieza, clasificación y
                    selección utilizando maquinaria especializada.
                  </p>
                </div>
              </div>
            </div>

            <div className="container_Bloque">
              <img
                src={bloque3}
                alt="Logística y Transporte"
                width={"100%"}
                className="img_Bloque"
              />
              <div className="contenido_Bloque">
                <PiPackageThin className="iconos_Bloques" />
                <p style={{ fontSize: "1.2rem" }}>LOGÍSTICA Y</p>
                <p style={{ fontSize: "1.2rem" }}>TRANSPORTE</p>
              </div>
              <div className="contenidoHover_Bloque">
                <PiPackageThin className="iconos_Bloques" />
                <p>LOGÍSTICA Y TRANSPORTE</p>
                <br />
                <div className="textoHover">
                  <p>
                    Disponemos de una flota de más de ocho camiones propios, lo
                    que nos permite coordinar el retiro de mercadería desde
                    distintas zonas productivas y garantizar su traslado
                    eficiente hacia nuestras plantas de procesamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container_Bloque">
            <img
              src={bloque4}
              alt="Exportación"
              width={"100%"}
              className="img_Bloque d-none-mobile"
            />

            <img
              src={bloque42}
              alt="Exportación"
              className="img_Bloque d-block-mobile"
            />

            <div className="contenido_Bloque">
              <img
                src={icon4}
                alt="icono bloque 4"
                width={"70px"}
                style={{ marginBottom: "20px" }}
              />
              <p style={{ fontSize: "1.2rem" }}>EXPORTACIÓN</p>
            </div>

            <div className="contenidoHover_Bloque">
              <img
                src={icon4}
                alt="icono bloque 4"
                width={"70px"}
                style={{ marginBottom: "20px" }}
              />
              <p>EXPORTACIÓN</p>
              <br />
              <div className="textoHover">
                <p>
                  La mercadería procesada se prepara para su envío a distintos
                  mercados internacionales cumpliendo con estándares de calidad.
                  Además, contamos con SENASA y aduana en planta, lo que nos
                  permite agilizar los procesos de control y despacho para
                  exportación.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      <section id="comoFunciona_Seccion">
        <div id="CF_Container" className="container stepper-full-container">
          <h2 style={{ color: "white", fontWeight: "500" }}>¿Cómo Funciona?</h2>

          <div
            className={`stepper-visual-wrapper ${pasoActual >= 1 ? "paso-activo" : ""} ${pasoActual === 4 ? "paso-final" : ""}`}
          >
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width:
                    window.innerWidth > 800
                      ? pasoActual === 1
                        ? "15%"
                        : pasoActual === 2
                          ? "40%"
                          : pasoActual === 3
                            ? "60%"
                            : pasoActual === 4
                              ? "100%"
                              : "0"
                      : "100%",
                  height:
                    window.innerWidth <= 800
                      ? pasoActual === 1
                        ? "15%"
                        : pasoActual === 2
                          ? "40%"
                          : pasoActual === 3
                            ? "60%"
                            : pasoActual === 4
                              ? "100%"
                              : "0"
                      : "100%",
                }}
              ></div>
            </div>

            <div className="pasos_Container">
              {pasosInfo.map((paso) => (
                <div
                  key={paso.id}
                  className={`circulo-paso ${pasoActual >= paso.id && pasoActual !== 0 ? "activo" : ""}`}
                  onClick={() => irAlPaso(paso.id)}
                >
                  {paso.id === 1 ? "I" : paso.id}
                </div>
              ))}
            </div>
          </div>

          <div
            id="pasos_Contenido"
            className="contenido-paso-wrapper text-center"
          >
            {pasosInfo
              .filter((p) => p.id === pasoActual)
              .map((infoPaso) => (
                <div key={infoPaso.id}>
                  <h5
                    className="titulo-paso"
                    style={{
                      color: "white",
                      fontWeight: "400",
                      fontSize: "x-large",
                      fontFamily: "Cormorant Garamond",
                    }}
                  >
                    {infoPaso.titulo}
                  </h5>
                  <br />
                  <p className="descripcion-paso" style={{ color: "white" }}>
                    {infoPaso.descripcion}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* --- */}

      <section id="OLote_Seccion">
        {/* <img
          src={fondoOLote}
          alt="fondo seccion ofrece tu lote"
          width={"100%"}
        /> */}

        <div id="form_Container">
          <h2>Ofrecé Tu Lote De Porotos</h2>
          <p style={{ color: "#377448", marginBottom: "15px" }}>
            Completá el formulario y nuestro equipo comercial evaluará tu
            propuesta.
          </p>

          <Form ref={form} onSubmit={enviarEmail}>
            <Form.Group className="mb-3" controlId="formGroupName">
              {/* <Form.Label className="formLabels">Nombre y Apellido</Form.Label> */}
              <Form.Control
                className="formControls"
                type="text"
                name="nombre_completo"
                placeholder="Ingrese Nombre y Apellido"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupNumber">
              {/* <Form.Label className="formLabels">
                Teléfono / WhatsApp
              </Form.Label> */}
              <Form.Control
                type="number"
                name="telefono"
                className="no-arrows formControls"
                placeholder="Ingrese Teléfono"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupEmail">
              {/* <Form.Label className="formLabels">Email</Form.Label> */}
              <Form.Control
                className="formControls"
                type="email"
                name="email_contacto"
                placeholder="Ingrese Email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupProvincia">
              {/* <Form.Label className="formLabels">
                Provincia / Localidad
              </Form.Label> */}
              <Form.Control
                className="formControls"
                type="text"
                name="provincia_localidad"
                placeholder="Ingrese Provincia / Localidad"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="d-block formLabels">
                Tipo de poroto
              </Form.Label>

              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="Negro"
                name="grupo_poroto"
                value="negro"
                id="p1"
                required
              />
              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="Mung"
                name="grupo_poroto"
                value="mung"
                id="p2"
              />
              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="Todas las anteriores"
                name="grupo_poroto"
                value="todas"
                id="p3"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupCantidad">
              {/* <Form.Label className="formLabels">
                Cantidad aproximada (toneladas)
              </Form.Label> */}
              <Form.Control
                type="number"
                name="cantidad_tn"
                className="no-arrows formControls"
                placeholder="Ingrese Cantidad Aproximada (toneladas)"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGroupProcNat">
              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="Procesado"
                name="estado_poroto"
                value="procesado"
                id="e1"
                required
              />
              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="Natural"
                name="estado_poroto"
                value="natural"
                id="e2"
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGroupFechaCosecha">
              <Form.Label className="d-block formLabels">
                Fecha de cosecha
              </Form.Label>

              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="2024"
                name="grupo_cosecha"
                value="2024"
                id="c2024"
                required
              />
              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="2025"
                name="grupo_cosecha"
                value="2025"
                id="c2025"
              />
              <Form.Check
                className="formLabels"
                inline
                type="radio"
                label="2026"
                name="grupo_cosecha"
                value="2026"
                id="c2026"
              />
            </Form.Group>

            <Button type="submit" id="btnEnviarInfo" className="w-100">
              Enviar información
            </Button>
          </Form>
        </div>

        <div id="mapa_Container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.17339585515!2d-65.22188112475243!3d-26.897991576655944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225bfef67f7569%3A0x672eae20df173a14!2sAgro%20World%20Argentina%20S.R.L.!5e0!3m2!1ses!2sar!4v1774402684706!5m2!1ses!2sar"
            width="450"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </section>
  );
}
