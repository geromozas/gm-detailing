import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="boxNavbar">
      <img
        className="logoNavbar"
        src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1738867574/gm-detailing/mini-logo-detailing_jnkpmy.png"
        alt=""
        style={{ borderRadius: 10 }}
      />
      <div className="boxButtonsNav">
        <a href="#boxServices">
          <button className="buttonNav" style={{ marginRight: 40 }}>
            SERVICIOS
          </button>
        </a>
        {/* <button>GALERÍA</button> */}
        {/* <button>OPINIONES</button> */}
        <a href="#boxContact">
          <button className="buttonNav">CONTACTO</button>
        </a>
        {/* <button className="buttonNav">PREGUNTAS</button> */}
        {/* <button>BLOG</button> */}
      </div>
    </div>
  );
};
