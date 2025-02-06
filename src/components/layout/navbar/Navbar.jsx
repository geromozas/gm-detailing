import "./Navbar.css";

export const Navbar = () => {
  return (
    <div id="boxNavbar">
      <h1>GM Detailing</h1>
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
