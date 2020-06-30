import React from 'react';

export default function Card({ quoteLink, quoteRepo }) {

    return (
        <div className="card quote-card">
            <div className="card-body">
                <h5 className="card-title quote-title">Inspiring Quote</h5>
                <p className="card-text quote-content">A simple page where you randomly receive an inspirational quote</p>
                <a href={`${quoteLink}`} className="btn btn-primary quote-button">Website</a>
                <a href={`${quoteRepo}`} className="btn btn-primary quote-button">GitHub</a>
            </div>
        </div>
    )
}