import './Nav.css';
import { Link } from 'react-router-dom';
import Lupa from '../img/lupa.png'
import Mensagem from '../img/dialogo.png';
import Perfil from '../img/perfil.png';
import Email from '../img/email.png';
import Carrinho from '../img/carrinho.png';
import Logo from '../img/logo.png'
import Pessoa from '../img/pessoa.png'
import { Menu } from "../Menu/Menu";

export function Nav() {

    return (
    <div className="Nav">
      <div className='gambs'>
      <div className='container_nav' id=''>
        <Link to='/' className="link_logo">
          <img src={Logo} alt="" id='' />
        </Link>
      </div>
      <div className="caixa-search">
            <input className="caixa-texto" type="text" name="" placeholder="Pesquisar..." />
                
            <a className="botao-search" href="#">
                <img src={Lupa} alt="" id='lupa' />
            </a>
      </div>
      <div className="painel">
            <div className='opcoes'> <img id='mensagem' src={Mensagem} alt="" /> <span className='span_opcoes'>Central de Atendimento</span>
              <div className='opcoes-ocultas'><span className='span_opcoes_ocultas'>Envie uma Mensagem</span> 
                  
                  <div  className='opcoes_div_ocultas'>
                    <a href="https://www.google.com/" target='_blank'><img id='logo_email' src={Email} alt="" /><span className='span_opcoes_ocultas'> email@empresa.com.br</span> </a>
                  </div>
                    <span className='span_opcoes_ocultas'> Horario e Atendimento</span>
                  <div className='opcoes_div_ocultas'>
                    <a href="https://www.youtube.com/" target='_blank'><img id='logo_email' src={Email} alt="" /><span className='span_opcoes_ocultas'> email@empresa.com.br</span> </a>
                  </div>


              </div>
            </div>
            
            <div className='opcoes'> <img id='mensagem' src={Perfil} alt="" />
                <div className='intro_opcoes'>
                  <span className='span_opcoes' id='ou'>Bem-vindo(a)</span><span className='span_opcoes' id='entrar_cadastrar'><a href="">Entrar</a> <span id='ou'>ou</span> <a href="">Cadastrar</a> </span>
                </div>
                <div className='opcoes-ocultas' id='login_logout'>
                  
                    <div className='aps_pessoa' >
                      <img id='img_cliente' src={Pessoa} alt="" /> <span className='span_opcoes_ocultas' id='saudacao_cliente'> Olá, Mari Souza</span>
                    </div>
                    
                    <div className='opcoes_div_ocultas'>
                      <a href="https://www.youtube.com/" target='_blank'><img id='logo_email' src={Email} alt="" /><span className='span_opcoes_ocultas'> email@empresa.com.br</span> </a>
                    </div>
                    <div className='opcoes_div_ocultas'>
                      <a href="https://www.youtube.com/" target='_blank'><img id='logo_email' src={Email} alt="" /><span className='span_opcoes_ocultas'> email@empresa.com.br</span> </a>
                    </div>
                    <div className='opcoes_div_ocultas'>
                      <a href="https://www.youtube.com/" target='_blank'><img id='logo_email' src={Email} alt="" /><span className='span_opcoes_ocultas'> email@empresa.com.br</span> </a>
                    </div>


                </div>
              </div>
              
            <div className='carrinho'>  <img id='carrinho' src={Carrinho} alt="" /> </div>
        </div>
       </div> 
      <Menu/>
    </div>
  );
}