import "./Card.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import {  Contador } from "../Utilitarios/Contador";
import {  BotaoCompra } from "../Utilitarios/BotaoCompra";
import { Loading } from '../Utilitarios/Loading'
import { AppContext } from "../Context/AppContext";



export function Card() {

  const [loading, setLoading] = useState(true)
  const {product, setProduct , txtBusca} = useContext(AppContext)

  const getRes = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/Product?name=${txtBusca}`);
      console.log(txtBusca +"texto")
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
    }
  };
  useEffect(() => {
        getRes();
    }, [txtBusca]); // Dependendo do txtBusca, para refazer a busca quando ele muda

    if (loading) {
        return <Loading />;
    }

  return (
    (loading ? <Loading/> : <div className="Card">
    {product.map((resposta) => (
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
