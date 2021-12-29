import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Example } from './Example';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Hello App</div>} />
          <Route path="pokemon" element={<div>Hello pokemon</div>} />
        </Routes>
        <h1>Marta Template</h1>
        <Example name='Wojtek' age={5} />
      </BrowserRouter>
    </div>
  );
}

export default App;
