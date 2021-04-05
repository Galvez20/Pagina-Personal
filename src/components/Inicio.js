import React, {useState, Fragment, forwardRef} from 'react';
import Contacto from './Contacto';
import "./styles/Inicio.css"


const Inicio = () => {

    return (
        <Fragment>
            <div className = "FondoInicio">

                <div className="Top-inicio">
                    <div className="logo-posicion">
                        <img className="logo" src="https://static1.e621.net/data/d0/f4/d0f404f4906de8be393ee16b7ae6a522.jpg" ></img>
                        <h1 className="logo-nombre">Galv3z</h1>
                    </div>
                    <div className="buttonGroup" role="group" aria-label="Basic example">
                        <button type="button" className="buttonTop">Inicio</button>
                        <button type="button" className="buttonTop">Trabajos</button>
                        <button type="button" className="buttonTop">Comisiones</button>
                        <button type="button" className="buttonTop">Acerda de mi</button>
                    </div>
                </div>

                <div className="InicioPresentacion">
                    <div>
                        <h1>Bienbenidos a mi pagina personal</h1>
                    </div>
                    <div>
                        <h3>Donde encontraras todo acerca de mi nwn</h3>
                    </div>
                </div>

                <div className="component-contenido"></div>
            </div>           
            <Contacto/>
        </Fragment>
    );
}
  export default Inicio;
  