import React from "react";

export default function Botao(){
    const clickcaixa =()=>{
        alert('Teste do botão');
    }

    return(
        <>
            <button className="botao" onClick={clickcaixa}>
                Salvar e Entrar
            </button>

            <style>{`

                .botao{
                    margin-top: 5%;
                    background-color: #3AA6B9;
                    border-color: #3AA6B9;
                    width:50%;
                    padding:0.75%
                `}
            </style>
        </>
    )

}