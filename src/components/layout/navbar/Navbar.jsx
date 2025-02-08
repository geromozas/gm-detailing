import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="boxNavbar">
      {/* <h1>GM Detailing</h1> */}
      <img
        src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1738867574/gm-detailing/mini-logo-detailing_jnkpmy.png"
        alt=""
        style={{ borderRadius: 10 }}
      />
      <div>
        <button>SERVICIOS</button>
        <button>GALERÍA</button>
        {/* <button>OPINIONES</button> */}
        <button>CONTACTO</button>
        <button>PREGUNTAS</button>
        <button>BLOG</button>
      </div>
    </div>
  );
};
