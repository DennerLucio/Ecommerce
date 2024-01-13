import "./Card.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {  Contador } from "../Utilitarios/Contador";
import {  BotaoCompra } from "../Utilitarios/BotaoCompra";
import { Loading } from '../Utilitarios/Loading'

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

  const [loading, setLoading] = useState(true)
  const [res, setRes] = useState<Product[]>([]);

  const getRes = async () => {
    try {
      const response = await axios.get('http://localhost:8000/Product');
      const data = response.data;
      setRes(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {


if (loading) {
  const intervalId = setInterval(() => {
    if (!loading) {
      clearInterval(intervalId);
    } else {
      window.location.reload();
    }
  }, 10000);

  getRes();

  return () => {
    clearInterval(intervalId);
  };
    
  }}, [loading]);

  return (
    (loading ? <Loading/> : <div className="Card">
    {res.map((resposta) => (
      <div className="container-card" key={resposta.id}>
          <div className="div-img">{resposta.images.slice(0,1).map((imagem) => (
            <img className="img-card" key={imagem.id} src={imagem.url} alt={`Imagem ${imagem.id}`} />
          ))}</div>
          <div className="div-interna-card"> <span>{resposta.name} </span> <span>{resposta.value}</span>  </div>
         
          <div className="div-interna-card last-div-interna-card"> <Contador/> <BotaoCompra texto='Comprar'/> </div>
       
      </div>
    ))}
  </div> )


    
  );
}
