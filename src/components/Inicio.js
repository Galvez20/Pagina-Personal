import React, {useState, Fragment, forwardRef} from 'react';
import Contacto from './Contacto';
import "./styles/Inicio.css"


const Inicio = () => {

    return (
        <Fragment>
            <div className = "FondoInicio">
                <div class="buttonGroup" role="group" aria-label="Basic example">
                    <button type="button" class="buttonTop">Inicio</button>
                    <button type="button" class="buttonTop">Trabajos</button>
                    <button type="button" class="buttonTop">Comisiones</button>
                    <button type="button" class="buttonTop">Acerda de mi</button>
                </div>
                    <div>
                        <h1>Bienbenidos a mi pagina personal</h1>
                    </div>
                <div>
                    <h3>Donde encontraras todo acerca de mi nwn</h3>
                </div>
            </div>
            <Contacto/>
        </Fragment>
    );
}
  export default Inicio;
  