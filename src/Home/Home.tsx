import './Home.css';
import { Carousels } from "../Carousel/Carousels";
import { Card } from "../Cards/Card"

export function Home() {


  
  return (
    <div className="Home">
      
      <Carousels />

      <div className='card_container'>
        <Card />
      </div>



    
    </div>
  );
}