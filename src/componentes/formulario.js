import React from "react";
import Input from './input';

export default function Formulario(){
return(
<>
<form className='formulario'>
<div className="infos">
        <h1>Cadastro:</h1>
        <div className="cadastro">
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
        </div>
    </div>    
        </form>
   

        <style>{`

        .infos{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:50%;
          }

        .formulario{
            display: flex;
            flex-direction: column;
            gap:10px 30px;}

        .itens{
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            margin-top:3%
        }
        `}
  </style>
</> );
}