import "./Home.css";

const Home = () => {
  return (
    <div id="boxHome">
      <div className="aboutMe">
        <h1 className="titleHome">Detailing de excelencia</h1>
        <p className="textHome">
          Somos apasionados por los vehiculos y expertos en devolverles su
          brillo original. Nuestra atención al detalle y compromiso con la
          calidad nos distingue en cada servicio.
        </p>
        <div className="boxButtonTurno">
          <a href="https://wa.me/549XXXXXXXXX?text=Hola%2C%20quisiera%20reservar%20un%20turno">
            <button className="buttonTurno">Reserva tu turno</button>
          </a>
        </div>
      </div>
      <div className="BoxPictureLogo">
        <img
          className="pictureLogo"
          src="https://res.cloudinary.com/ddmvo0ert/image/upload/v1738618892/gm-detailing/logo-detailing_a1pwsq.png"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Home;
