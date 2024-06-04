import React from 'react';
import Formulario from './componentes/formulario';
import BannerLateral from './componentes/bannerLatera';

import './App.css';

export default function App() {
  return (
    <div className="principal">
      <BannerLateral/>
      <div className="infos">
      <Formulario/>
      </div>
    </div>
  );
}
