import { useContext, useState ,ChangeEvent, FormEvent } from 'react';
import './BarraPesquisa.css'
import { BsSearch } from 'react-icons/bs';
import { AppContext } from '../Context/AppContext';


export function BarraPesquisa() {
  

  const [inputValue, setInputValue] = useState<string>('')
  const {setTxtBusca} = useContext(AppContext)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    
  };

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTxtBusca(inputValue)
    
};
    
    return (
          
         <form  className='form-pesquisa' onSubmit={handleSubmit}>
            
            <input type="search" className='search-bar' placeholder='Buscar Produtos' value={inputValue} onChange={handleInputChange}/>
            
            <button type='submit' className='button_search'> <BsSearch /> </button>

            </form>           
           
    
    )
  }

