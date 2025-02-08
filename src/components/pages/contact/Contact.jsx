import "./Contact.css";

const Contact = () => {
  return (
    <div id="boxContact">
      <h1
        style={{
          fontSize: 40,
          marginBottom: 30,
          marginTop: 40,
        }}
      >
        Contacto
      </h1>
      <div className="datesContact">
        <p>Ubicación: Rosario, Santa Fe, Argentina</p>
        <div className="contactIcons">
          <a href="">
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
