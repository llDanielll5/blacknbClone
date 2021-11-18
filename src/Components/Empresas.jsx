import React, { useState } from 'react'
import Content from './Content'
import empresas from './empresas'


function getCompany(props){
    return(
        empresas.map(empresa =>{
            return(
                <div className="box" key={empresa.id} onClick={()=>{
                    let chave = empresa.id - 1;
                    props.setAtual(chave);
                }}>
                    <img src={empresa.image}></img>
                    <div className="content" onClick={props.detalhes}>
                        <p>{empresa.nomeEmpresa}</p>
                    </div>
                </div>
            )
        })
    )
}

export default props => {
    return (
        getCompany(props)
    )
}


