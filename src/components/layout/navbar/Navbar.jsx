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
        <button className="buttonNav" style={{ marginRight: 40 }}>
          SERVICIOS
        </button>
        {/* <button>GALERÍA</button> */}
        {/* <button>OPINIONES</button> */}
        <button className="buttonNav" style={{ marginRight: 40 }}>
          CONTACTO
        </button>
        <button className="buttonNav">PREGUNTAS</button>
        {/* <button>BLOG</button> */}
      </div>
    </div>
  );
};
