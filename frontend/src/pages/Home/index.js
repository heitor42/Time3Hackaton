import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>ESQUERDA</h1>
            <h3>
            Acesse 2500+ Conteúdos Online sobre Investimento de uma das maior res corretoras do Brasil
            </h3>
            <Link className="btn btn-success" to="/signup">Inscreva-se</Link>
          </div>
          <div className="col-md-6">
            <h1>direita</h1>
            <img src="imagens/usuarioCel.jpg" alt="" />
          </div>
        </div>
      </div>
        <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
      <div className="capaUm">
        <h1 id="tituloInvestir" >Aprenda a Investir na Prática</h1>
        <h2>01</h2>
        <div className="container containersDois">
          <span className="cinza">
          <div className="row">
            <div className="col-md-6">
              <img src="imagens/usuarioCelDois.jpg" width="260px" alt="" />
            </div>
            <div className="col-md-6"></div>
          </div>
          </span>
        </div>

        <h2>02</h2>
        <div className="container containersDois">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-6">
            <img src="imagens/coin.png" width="260px" alt="" />
            </div>
          </div>
        </div>


        <h2>03</h2>
        <div className="container containersDois">
          <div className="row">
            <div className="col-md-6">
              <img src="imagens/vaso.png" width="260px" alt="" />
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
      </div>
  </>
  )
}
          
export default Home;