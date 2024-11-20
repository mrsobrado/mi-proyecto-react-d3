import React from 'react';
import './App.css';
import GraficoD3 from './GraficoD3';

import Grafico3DSfera from './Grafico3DSfera';

function App() {
  return (
    <div className="App">
      <h1>Gráficos en React</h1>
      <Grafico3DSfera />
      <GraficoD3 />
    </div>
  );
}

export default App;