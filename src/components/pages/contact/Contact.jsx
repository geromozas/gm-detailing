import "./Contact.css";

const Contact = () => {
  return (
    <div id="boxContact">
      <h1 className="titleContact">Contacto</h1>
      <div className="datesContact">
        <p className="textUbic">Ubicación: Rosario, Santa Fe, Argentina</p>
        <div className="contactIcons">
          <a
            href="https://wa.me/549XXXXXXXXX?text=Hola%2C%20quisiera%20reservar%20un%20turno"
            target="_blank"
          >
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1738954589/gm-detailing/logo-wsp_z38a6i.jpg"
              alt=""
              style={{ width: 47, borderRadius: 12 }}
            />
          </a>
          <a href="">
            <img
              src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1738873932/gm-detailing/insta-Logo_vu1wev.png"
              alt=""
              style={{ width: 50 }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
