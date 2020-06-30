import React from 'react';

export default function Card({ quoteLink, quoteRepo }) {

    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={`${quoteLink}`} class="btn btn-primary">Inspiring Quote</a>
                <a href={`${quoteRepo}`} class="btn btn-primary">GitHub</a>
            </div>
        </div>
    )
}