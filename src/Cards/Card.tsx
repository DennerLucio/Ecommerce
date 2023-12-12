import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {  Contador } from "../Utilitarios/Contador";
import {  BotaoCompra } from "../Utilitarios/BotaoCompra";

interface Imagens {
 id: string;
 url: string;
}

interface Product {
  id: string;
  name: string;
  value: string;
  images: Imagens[];
}

export function Card() {

  const [res, setRes] = useState<Product[]>([]);

  // const totalProduct: number = res.slice(0, 6).length;

  const getRes = async () => {
    try {
      const response = await axios.get("https://localhost:5001/Product");
      const data = response.data;
      setRes(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getRes();
  }, []);

  return (
    <div className="Card">
      {res.map((resposta) => (
        <div className="container-card" key={resposta.id}>
            <div className="div-img">{resposta.images.slice(0,1).map((imagem) => (
              <img className="img-card" key={imagem.id} src={imagem.url} alt={`Imagem ${imagem.id}`} />
            ))}</div>
            <div className="div-interna-card"> <span>{resposta.name} </span> <span>{resposta.value}</span>  </div>
           
            <div className="div-interna-card last-div-interna-card"> <Contador/> <BotaoCompra texto='Comprar'/> </div>
         
        </div>
      ))}
    </div>
  );
}
