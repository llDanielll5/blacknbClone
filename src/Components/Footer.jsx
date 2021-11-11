import React from 'react'
import './Footer.css'

export default (props) => {

    return(
        <footer>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
            <div className="infos">
                <ul>
                    <li><span>Copyright© 2020 Daniel</span></li>
                    <li><a href="#">Sobre</a></li>
                    <li><a href="#">Formulário de Contato</a></li>
                    <li><a href="#">Política de Privacidade</a></li>
                    <li><a href="#">Termos de Uso</a></li>
                </ul>
            </div>
            <div className="socials">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-instagram"></i>
                <select name="select" className="estiloSelect">
                    <option value="en">en</option>
                    <option value="pt" selected>pt</option>
                    <option value="fr">fr</option>
                    <option value="es">es</option>
                </select>
            </div>
        </footer>
    )
}