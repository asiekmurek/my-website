import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import CardsArea from './components/CardsArea';


function App() {

  const name = "Joanna Murawska";

  return (
    <>
      <Navbar name={name} /> 
      <CardsArea/>
    </>
  );
}

export default App;
