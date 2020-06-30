import React from 'react';
import Navbar from './components/Navbar';
import CardsArea from './components/CardsArea';
import Footer from './components/Footer';

function App() {

  const name = "Joanna Murawska";
  const thisWebsiteRepo = "https://github.com/asiekmurek/my-website";


  return (
    <>
      <Navbar name={name} />
      <CardsArea />
      <Footer repo={thisWebsiteRepo}/>
    </>
  );
}

export default App;
