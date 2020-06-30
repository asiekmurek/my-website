import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';


function App() {

  const name = "Joanna Murawska";
  const quoteTitle = "Inspiring Quote";
  const quoteContent = "A simple page where you randomly receive an inspirational quote";
  const btnQuoteWebsite = "Website";
  const btnQuoteGithub = "GitHub";
  const quoteLink = "https://inspiring-quote.asiekmurek.vercel.app/";
  const quoteRepo = "https://github.com/asiekmurek/inspiring-quote";

   

  const link = "";
  const repo = "";

  return (
    <>
      <Navbar name={name} />
      
      <Card title={quoteTitle} 
            content={quoteContent}
            quoteLink={quoteLink}
            quoteRepo={quoteRepo}
            btnWebsite={btnQuoteWebsite} 
            btnGithub={btnQuoteGithub}
      />
    </>
  );
}

export default App;
