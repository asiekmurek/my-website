import React from 'react';
import Card from './Card';

export default function CardsArea() {
 
    const quoteTitle = "Inspiring Quote";
    const quoteContent = "A simple page where you randomly receive an inspirational quote";
    const btnQuoteWebsite = "Website";
    const btnQuoteGithub = "GitHub";
    const quoteLink = "https://inspiring-quote.asiekmurek.vercel.app/";
    const quoteRepo = "https://github.com/asiekmurek/inspiring-quote";

    const randomStuffTitle = "Random Stuff";
    const randomStuffContent = "Simple GraphQL Server with Random Stuff in it";
    const btnRandomStuffHerokuPlayGround = "Heroku Playground";
    const btnRandomStuffGithub = "GitHub";
    const randomStuffHerokuLink = "https://agile-cliffs-85240.herokuapp.com/?fbclid=IwAR3WyBZqSmEjJkvSj_vVfNe2HNP5BE5tsZNgY8kY8rnSi_98P_w3Lps9V8Y";
    const randomStuffRepo = "https://github.com/asiekmurek/random-stuff";


    return (
        <div className="row">
            <Card title={quoteTitle}
                content={quoteContent}
                websiteLink={quoteLink}
                repoLink={quoteRepo}
                btnWebsite={btnQuoteWebsite}
                btnGithub={btnQuoteGithub}
            />
             <Card title={randomStuffTitle}
                content={randomStuffContent}
                websiteLink={randomStuffHerokuLink}
                repoLink={randomStuffRepo}
                btnWebsite={btnRandomStuffHerokuPlayGround}
                btnGithub={btnRandomStuffGithub}
            />
           
        </div>
    );
}