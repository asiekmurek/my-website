import React from 'react';

export default function Card({ title, content, btnWebsite, btnGithub, quoteLink, quoteRepo }) {

    return (
        <div className="card quote-card">
            <div className="card-body">
                <h5 className="card-title quote-title">{title}</h5>
                <p className="card-text quote-content">{content}</p>
                <a href={`${quoteLink}`} className="btn btn-primary quote-button">{btnWebsite}</a>
                <a href={`${quoteRepo}`} className="btn btn-primary quote-button">{btnGithub}</a>
            </div>
        </div>
    )
}