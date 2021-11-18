import React, { useState } from 'react';
import './Content.css'
import Empresas from './Empresas.jsx'
import empresas from './empresas';
import Mapa from './Mapa'


export default (props) => {

    const [atual, setAtual] = useState(0);

    var imagemA = empresas[atual].image;

    function getDetailsCompany() {
        var informations = document.getElementById('informations');

        informations.style.display = 'block';

    }

    function closeWindow() {
        let inform = document.getElementById('informations');

        inform.style.display = "none";

    }


    return (
        <section>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="section-left">
                <div className="section-left-banner">
                    <p>Você parece novo por aqui. Quer fazer uma tour?</p>
                    <div className="choice">
                        <a href="#">Fechar</a>
                        <input type="submit" value="Fazer tour" />
                    </div>
                </div>
                <div className="wrapper">
                    <h3>Empresas</h3>
                    <p>Nós encontramos {empresas.length} empresas para você</p>
                    <div className="box-container">
                        <Empresas detalhes={getDetailsCompany} setAtual={setAtual}></Empresas>
                    </div>
                </div>
            </div>


            <div className="section-right">
                <input type="text" placeholder="Buscar por empresa..." />
                <input type="submit" value="Buscar" />
                <div className="informations-and-map" >
                    
                    <div className="map" id="map"><Mapa></Mapa></div>

                    <div className="informations" id="informations">
                        <div className="informations-imgs">
                            <span onClick={closeWindow}>X</span>
                            <img src={empresas[atual].image} alt="" id="img1" />
                            <img src={empresas[atual].image} alt="" id="img2" />
                            <div id="img3"><Mapa></Mapa></div>
                        </div>
                        <div className="informations-header">
                            <h2>{empresas[atual].nomeEmpresa}</h2>
                            <h5>{empresas[atual].distEmpresa}</h5>
                        </div>
                        <div className="informations-star">
                            <span>{empresas[atual].stars}.0 </span>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                        <div className="informations-about">
                            <div className="informations-about-text">
                                <h4>Sobre:</h4>
                                <p>{empresas[atual].sobreEmpresa}</p>
                            </div>
                            <div className="informations-about-tel">
                                <h4>Telefone: </h4>
                                <p> {empresas[atual].telefone}</p>
                            </div>
                            <div className="informations-about-contact">
                                <h4>Contato: </h4>
                            </div>
                            <i className="fab fa-whatsapp"></i>
                            <div className="informations-about-website">
                                <h4>Site: </h4>
                                <p><a href="#">{empresas[atual].site}</a></p>
                            </div>
                            <div className="informations-about-zip">
                                <h4>Endereço: </h4>
                                <p>{empresas[atual].endereco}</p>
                            </div>
                            <div className="informations-about-open">
                                <h4>Horário de Abertura: </h4>
                                <span>Segunda 10:00 - 22:00</span>
                            </div>
                            <input type="submit" value="Mostrar mais" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )

}