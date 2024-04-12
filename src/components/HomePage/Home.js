import AltRoutes from "./AltRoutes";
import React from "react";

export const Home = () => {
  return (
    <div
      className="wrapper"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(img/home.jpg)`,
      }}
      data-aos="fade-down"
    >
      <div
        className="py-vh-6"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-xl-8 text-center" data-aos="fade-left">
              <div className="text-primary mb-3">
                <h1 className="display-1 fw-bold text-white">
                  Bienvenido a la <span className="text-warning">Deca</span> App
                </h1>
                <p
                  className="lead fw-bold"
                  style={{
                    color: "rgb(241 196 154)",
                  }}
                >
                  Te garantizamos las mejores rutas y disponibilidad de los
                  transportes públicos cerca de ti.
                </p>
                <AltRoutes />
                <a
                  href="/"
                  className="btn btn-primary text-white btn-xl shadow mx-5 me-3 rounded-0 my-5"
                >
                  Reporta un problema vial
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
