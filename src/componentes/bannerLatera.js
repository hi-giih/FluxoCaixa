import React from "react";

import img_logo from '../assets/logo_cad.png'

export default function BannerLateral(){
    return(
        <>
        <div className="logo">
            <img src={img_logo} alt="Logo" className="img_logo" width="40%"></img>
            <p className='p_logo'> Abacaxi Topzeira</p>
      </div>

      <style>{`
        .logo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width:50%;
            background-color: #FFD0D0;
          }
        .p_logo{
            background-color: #3AA6B9;
            padding: 1% 6%;
            width: 40%;
            text-align: center;
          }

          `}
      </style>
        </>
    )
}