import "./Menu.css";
import axios from "axios";
import { useEffect, useState } from "react";
import menu from "../img/menu.png";
import seta from "../img/seta_menu.png";

interface Subcategory {
  subcategoryId: string;
  subcategoryName: string;
  subcategoryStatus: boolean;
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}


export function Menu() {
  const [res, setRes] = useState<Category[]>([]);
  
  const totalCategorias: number = res.length;


  const getRes = async () => {
    try {
      const response = await axios.get("https://localhost:5001/Category");
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
    <div className="Menu">
      <ul id="lista_categoria">
        <li className="cat_menu_principal">
          <img src={menu} alt="" id="menu_img" /> Todas as Categorias
          <ul className="filtro_oculto">
            {res.slice(0, 5).map((resposta, index) => (
              <div className={`container_mari ${index === totalCategorias -1 ? 'last-cat-div' : ''}`} key={resposta.id}>
                <li className={`item_filtro ${index === totalCategorias -1 ? 'last-cat-li' : ''}`}>
                  {resposta.name}{" "}
                  <img src={seta} alt="" className="seta seta_sub" />
                </li>
                
                <div className="subcategorias">
                <ul className="ul_mari">
                      <div className="div-sub-titulo" id="" key={resposta.id}> <h4> {resposta.name}   </h4> </div>
                    {resposta.subcategories.slice(0, 5).map((subcategoria) => (
                      <li className="li-sub-cat" key={subcategoria.subcategoryId}>
                        {subcategoria.subcategoryName}{" "}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </ul>
        </li>
        {res.slice(0, 5).map((resposta) => (
          <li className="cat_menu_principal" key={resposta["id"]}>
            {resposta["name"]} <img src={seta} alt="" className="seta" />
            <ul className="filtro_oculto">
              {resposta.subcategories.slice(0, 5).map((subcategoria, index) => (

                <div className= {`container_mari ${index === resposta.subcategories.length -1 ? 'last-sub-cat-div' : ''}`} key={subcategoria.subcategoryId }>
                <li className = {`item_filtro ${index === resposta.subcategories.length -1 ? 'last-sub-cat-li' : ''}`} key={subcategoria.subcategoryId }>
                  {subcategoria.subcategoryName}{" "}
                  <img src={seta} alt="" className="seta" />
                </li>
                </div>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
