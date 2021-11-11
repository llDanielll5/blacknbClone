import React from 'react'
import './Content.css'
import Empresas from './Empresas.jsx'



export default (props) =>{
    return(
        <section>
            <div className="section-left">
                <div className="section-left-banner">
                    <p>Você parece novo por aqui. Quer fazer uma tour?</p>
                    <div className="choice">
                        <a href="#">Fechar</a>
                        <input type="submit" value="Fazer tour"/>
                    </div>
                </div>
                <div className="wrapper">
                    <h3>Empresas</h3>
                    <p>Nós encontramos 57 empresas para você</p>
                    <div className="box-container">
                        <Empresas></Empresas>
                    </div>  
                </div>
            </div>


            <div className="section-right">
                <input type="text" placeholder="Buscar por empresa..." />
                <input type="submit" value="Buscar" />
                <div className="informations-and-map" id="informations">
                    <div className="map"></div>
                    <div className="informations"></div>
                </div>
            </div>
        </section>
    )

}