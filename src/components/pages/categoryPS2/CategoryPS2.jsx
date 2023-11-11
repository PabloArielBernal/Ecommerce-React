import React from "react";
import { Link } from "react-router-dom";
import "./CategoryPS2.css";
import { Footer } from "../../layout/footer/Footer";

export const CategoryPS2 = () => {
  return (
    <div className="category-container">
      <div className="category-items">
        <span className="grupo1">
          <Link id="accion" to="./accion">Acción</Link>
          <Link id="aventura" to="./aventura">Aventura</Link>
        </span>
        <span className="grupo2">
          <Link id="deportes" to="./deportes">Deportes</Link>
          <Link id="carreras" to="./carreras">Carreras</Link>
        </span>
        <span className="grupo3">
          <Link id="terror" to="./terror">Terror</Link>
          <Link id="lucha" to="./lucha">Lucha</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};
