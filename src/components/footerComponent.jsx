import logotipoAW from "../assets/logotipoAW.png";
import "../styles/footerComponent.css";
import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

export default function FooterComponent() {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="footer_Container" expand="lg">
      <div id="infoFooter_Container">
        <div className="logo_Container">
          <button style={{border:"none", backgroundColor:"transparent"}}>
            <img
              src={logotipoAW}
              alt="logoAgroWorld"
              width={"80px"}
              id="logotipoAW"
              onClick={() => handleScroll("header_Container")}
            />
          </button>
        </div>

        <div className="iconos_Container">
          <CiLocationOn style={{ color: "#a8d146" }} className="iconoFooter" />
          <p>Tucumán, Argentina</p>
        </div>

        <div className="iconos_Container">
          <CiMail style={{ color: "#a8d146" }} className="iconoFooter" />
          <p>agroworldargentina.redes@gmail.com</p>
        </div>

        <div className="iconos_Container">
          <BsTelephone style={{ color: "#a8d146" }} className="iconoFooter" />
          <p>+54 9 381 350 - 2309</p>
        </div>

        <div style={{ display: "flex" }}>
          <a
            href="https://www.instagram.com/agroworldargentina?igsh=eXhscXlkbDQxemtz"
            target="_blank"
            className="iconosRedes"
          >
            <RiInstagramLine style={{ color: "#377448" }} />
          </a>

          <a
            href="https://www.facebook.com/p/Agro-World-Argentina-100042937278655/"
            target="_blank"
            className="iconosRedes"
          >
            <RiFacebookFill style={{ color: "#377448" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
