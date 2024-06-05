import React from "react";
import Input from './input';
import Botao from "./botao";

export default function Formulario(){
return(
<>
<h1 className="titulo">Cadastro</h1>
<form className='formulario'>
            <div className="itens">
                <label htmlFor='nome'>Nome:</label>
                <Input  type='text' id="nome" name="name"/>
            </div>
            <div  className="itens">
                <label htmlFor='nome'>Senha:</label>
                <Input type='password' id="password" name="senha"/>
            </div>
            <div  className="itens">
                <label htmlFor='nome'>Confirmar: </label>
                <Input type='password' id="password" name="senha"/>
            </div>
            <div  className="itens">
                <label htmlFor='nome'>Função:</label>
                <Input type='text' id="funcao" name="funcao"/>
            </div>   
</form>
<Botao/> 
   

        <style>{`

        .infos{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:50%;
          }

        .titulo{
            text-align:center;
        }

        .formulario{
            display: flex;
            flex-direction: column;
            gap:10px;
        }

        .itens{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size:1.75rem;          
        }


        `}
  </style>
</> );
}