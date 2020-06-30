import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';


function App() {

  const name = "Joanna Murawska";
  const quoteLink = "https://inspiring-quote.asiekmurek.vercel.app/";
  const quoteRepo = "https://github.com/asiekmurek/inspiring-quote";

  return (
    <>
      <Navbar name={name}/>
      <Card quoteLink={quoteLink}
            quoteRepo={quoteRepo}
      />
    </>
  );
}

export default App;
