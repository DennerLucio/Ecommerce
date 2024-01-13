import './BarraPesquisa.css'
import { BsSearch } from 'react-icons/bs';

export function BarraPesquisa() {
    
    return (
          
         <form  className='form-pesquisa'>
            
            <input type="search" className='search-bar' placeholder='Buscar Produtos'/>
            
            <button type='submit' className='button_search'> <BsSearch /> </button>

            </form>           
           
      
    )
  }

