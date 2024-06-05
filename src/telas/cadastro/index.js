import React from "react";
import Formulario from '../../componentes/formulario';
import BannerLateral from '../../componentes/bannerLatera';


export default function Cadastro(){
    return(
        <>
        <div className="principal">
            <BannerLateral/>
            <div className="infos">
                <Formulario/>
            </div>
        </div>
        </>
    )
}