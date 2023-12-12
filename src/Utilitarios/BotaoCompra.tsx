import './BotaoCompra.css'
import { Link } from 'react-router-dom'

export function BotaoCompra( { texto = "", endereco = "" , classeAdicional = ""}) {
    
    return (
      <div className={`button ${classeAdicional}`}>     
            <Link to={endereco} className="" >
              {texto}
            </Link>         
           
      </div>
    )
  }