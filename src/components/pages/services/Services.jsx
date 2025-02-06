import "./Services.css";

const Services = () => {
  return (
    <div id="boxServices">
      <h1
        style={{
          fontSize: 40,
          color: "black",
          marginBottom: 40,
          marginTop: 40,
        }}
      >
        Nuestros Servicios
      </h1>
      <h2 style={{ marginBottom: 20, fontSize: 30, color: "black" }}>Motos</h2>
      <hr style={{ width: "100%" }} />
      <div className="boxMotos">
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Basico</h2>
          <ul>
            <li>
              Lavado completo con Shampoo Ph neutro (ideal para proteger la
              pintura y tratamientos anteriormente hechos)
            </li>
            <li>Limpieza superficial de llantas y neumáticos.</li>
          </ul>
          <p>⌛Tiempo estimado: 1 - 1,5 horas.</p>
          <p>
            <strong style={{ fontSize: 20 }}>💲15.000</strong>
          </p>
        </div>
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Completo</h2>
          <ul>
            <li>Limpieza y lubricación completa del Kit de Arrastre.</li>
            <li>
              Lavado completo con Shampoo Ph neutro (ideal para proteger la
              pintura y tratamientos anteriormente hechos)
            </li>
            <li>
              Limpieza más profunda de la ciclística (llantas, neumáticos,
              basculante).
            </li>
            <li>
              Aplicación de cera rápida para dar brillo, semi protección a la
              pintura y semi repelencia al agua.
            </li>
          </ul>
          <p>⌛Tiempo estimado: 1,5 - 2 horas.</p>
          <p>
            <strong style={{ fontSize: 20 }}>💲30.000</strong>
          </p>
        </div>
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Semi-Premium</h2>
          <ul>
            <li>Limpieza y lubricación completa del Kit de Arrastre,</li>
            <li>
              Lavado completo con Shampoo Ph neutro (ideal para proteger la
              pintura y tratamientos anteriormente hechos),
            </li>
            <li>
              Limpieza más profunda de la ciclística (llantas, neumáticos,
              basculante),
            </li>
            <li>
              Aplicación de cera rápida para dar brillo, semi protección a la
              pintura y semi repelencia al agua.
            </li>
            <li> Rejuvenecimiento de plásticos, gomas.</li>
          </ul>
          <p>⌛Tiempo estimado: 2 - 3 horas.</p>
          <p>
            <strong style={{ fontSize: 20 }}>💲36.000</strong>
          </p>
        </div>
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado GM-Premium</h2>
          <ul>
            <li>Limpieza y lubricación completa del Kit de Arrastre,</li>
            <li>
              Pre-lavado para eliminar toda suciedad / contaminante superficial.
            </li>
            <li>
              Detallado de zona baja: llantas, neumáticos, buches, frenos,
              basculante, barrales suspensión, escape, etc.
            </li>
            <li>
              Detallado de zona media: motor completo, cuadro, apoya pie,
              estriberas del acompañante, guardabarros trasero / delantero y
              bajos asiento de la moto etc.
            </li>
            <li>
              Detallado de zona alta: tanque, carenado, asientos, tablero,
              faros, puños, espejos, comandos, etc.
            </li>
            <li>Rejuvenecimiento de plásticos, gomas.</li>
            <li>
              Aplicación de cera en pasta para dar mucho brillo, protección a la
              pintura y repelencia al agua. (Duración 6 a 8 meses).
            </li>
          </ul>
          <p>⌛Tiempo estimado: 4 - 5 horas.</p>
          <p>
            💎 Se trabaja todo por sector para no dejar nada sin detallar 💎
          </p>
          <p>
            <strong style={{ fontSize: 20 }}>💲75.000</strong>
          </p>
        </div>
      </div>
      <h2
        style={{
          color: "black",
          marginBottom: 20,
          marginTop: 20,
          fontSize: 30,
        }}
      >
        Autos y Camionetas
      </h2>
      <hr style={{ width: "100%" }} />
      <div className="boxVehiculos">
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Básico</h2>
          <ul>
            <li>
              Lavado exterior completo con Shampoo Ph neutro (ideal para
              proteger la pintura y tratamientos anteriormente hechos),
            </li>
            <li>Limpieza de llantas y neumáticos,</li>
            <li>Limpieza y Aspirado interior,</li>
          </ul>
          <p>⌛Tiempo estimado: 1 - 2 horas.</p>
          <p>
            <strong>Auto:💲12.000</strong>
          </p>
          <p>
            <strong>Camioneta: 💲18.000</strong>
          </p>
        </div>
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Semi-Premium</h2>
          <ul>
            <li>
              Lavado exterior completo con Shampoo Ph neutro (ideal para
              proteger la pintura y tratamientos anteriormente hechos),
            </li>
            <li>Limpieza de llantas y neumáticos,</li>
            <li>Limpieza y Aspirado interior,</li>
            <li>
              Aplicación de cera rápida para dar brillo, semi protección a la
              pintura y semi repelencia al agua.
            </li>
          </ul>
          <p>⌛Tiempo estimado: 1,5 - 2 horas.</p>
          <p>
            <strong>Auto:💲18.000</strong>
          </p>
          <p>
            <strong>Camioneta: 💲25.000</strong>
          </p>
        </div>
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Premium</h2>
          <ul>
            <li>
              Lavado exterior completo con Shampoo Ph neutro (ideal para
              proteger la pintura y tratamientos anteriormente hechos),
            </li>
            <li>Limpieza de llantas y neumáticos,</li>
            <li>Limpieza y Aspirado interior,</li>
            <li>
              Aplicación de cera rápida para dar brillo, semi protección a la
              pintura y semi repelencia al agua.
            </li>
            <li>Aplicación de rejuvenecedor de plásticos interiores,</li>
          </ul>
          <p>⌛Tiempo estimado: 2 - 3 horas.</p>
          <p>
            <strong>Auto:💲25.000</strong>
          </p>
          <p>
            <strong>Camioneta: 💲30.000</strong>
          </p>
        </div>
        <div className="service">
          <h2 style={{ marginBottom: 10 }}>Lavado Premium plus</h2>
          <ul>
            <li>
              Lavado exterior completo con Shampoo Ph neutro (ideal para
              proteger la pintura y tratamientos anteriormente hechos),
            </li>
            <li>Limpieza de llantas y neumáticos,</li>
            <li>Limpieza y Aspirado interior,</li>
            <li>Aplicación de rejuvenecedor de plásticos interiores,</li>
            <li>
              Aplicación de cera en pasta para dar mucho brillo, protección a la
              pintura y repelencia al agua. (Duración 6 a 8 meses).
            </li>
          </ul>
          <p>⌛Tiempo estimado: +4 horas.</p>
          <p>
            <strong>Auto:💲80.000</strong>
          </p>
          <p>
            <strong>Camioneta: 💲120.000</strong>
          </p>
          <p>💎 Resultados que destacan tu vehículo como nuevo. 💎</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
