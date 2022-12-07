import React from "react";

const Footer = () => {
    return (
    <div className="container py-5">
        <div className="row">
            <div className="col-md-6">
                <a href="#" className="mx-1"><img src="/imagenes/facebook.svg" alt="Facebook" width="24"/></a>
                <a href="#" className="mx-1"><img src="/imagenes/instagram.svg" alt="Instagram" width="24"/></a>
                <a href="#" className="mx-1"><img src="/imagenes/twitter.svg" alt="Teitter" width="24"/></a>
                <a href="#" className="mx-1"><img src="/imagenes/youtube.svg" alt="Youtube" width="24"/></a>
            </div>
            <div className="col-md-6 d-flex justify-content-end">
                <a href="#" target="_blank" rel="noreferrer" className="mx-1"><img src="imagenes/app_store_3x_d293084ca1.png" alt="App Store" width="115" /></a>
                <a href="#" target="_blank"  rel="noreferrer"className="mx-1"><img src="imagenes/disponible_google_play_3x_c977cae3bc.png" alt="Play Store" width="129" /></a>
            </div>
        </div>
        <hr />
        <div className="row">
            <div className="col-md-10">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="#" target="_blank" rel="noreferrer">Política de Privacidad</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="#" target="_blank" rel="noreferrer">Defensa del Consumidor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="#" target="_blank" rel="noreferrer">Protección de datos personales</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-muted" href="#" target="_blank" rel="noreferrer">Contacto</a>
                    </li>
                </ul>
            </div>
            <div className="col-md-2 text-end">
                <p><img src="imagenes/logo.jpg" alt="Electro Hogar" width="200" /> © Electro Hogar 2022</p> 
            </div>
        </div>
    </div>
    )
}

export default Footer;
