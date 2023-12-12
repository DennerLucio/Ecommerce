import "./Contador.css";
import { useState } from "react";
import menos from "../img/menos.png";
import mais from "../img/mais.png";

export function Contador() {
  const [numero, setNumero] = useState<number>(1);

  const aumentarNumero = () => {
    setNumero(numero + 1);
  };

  const diminuirNumero = () => {
    if (numero == 1) {
    } else {
      setNumero(numero - 1);
    }
  };

  return (
    <div className="Contador">
      <div className="div-borda-contador">
        <button className="buttons-contador" onClick={diminuirNumero}>
          {" "}
          <span>
            <img src={menos} alt="" />
          </span>
        </button>
        <span>{numero}</span>
        <button className="buttons-contador" onClick={aumentarNumero}>
          {" "}
          <span>
            {" "}
            <img src={mais} alt="" />{" "}
          </span>{" "}
        </button>
      </div>
    </div>
  );
}
