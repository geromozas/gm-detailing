import "./Home.css";

const Home = () => {
  return (
    <div id="boxHome">
      <div className="aboutMe">
        <h1 style={{ marginBottom: 20, fontSize: 40 }}>
          Detailing de excelencia
        </h1>
        <p style={{ marginBottom: 20, fontSize: 25 }}>
          Somos apasionados por los vehiculos y expertos en devolverles su
          brillo original. Nuestra atención al detalle y compromiso con la
          calidad nos distingue en cada servicio.
        </p>
        <button className="turno">Reserva tu turno</button>
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
