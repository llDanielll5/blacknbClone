import React from 'react'
import empresas from './empresas'

function getDetails(){
    console.log('detalhes');
}


function getCompany(){
    return(
        empresas.map(empresa =>{
            return(
                <div className="box" key={empresa.id} onClick={getDetails()}>
                    <img src={empresa.image}></img>
                    <div className="content">
                        <p>{empresa.nomeEmpresa}</p>
                    </div>
                </div>
            )
        })
    )
}

export default (props) => {
    return (
        getCompany()
    )
}


