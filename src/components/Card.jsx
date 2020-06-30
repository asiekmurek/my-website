import React from 'react';

export default function Card({ title, content, btnWebsite, btnGithub, websiteLink, repoLink }) {

    return (
        <div className="card quote-card col-sm">
            <div className="card-body text-center">
                <h5 className="card-title quote-title">{title}</h5>
                <p className="card-text quote-content">{content}</p>
                <a href={`${websiteLink}`} className="btn btn-primary quote-button text-center">{btnWebsite}</a>
                <a href={`${repoLink}`} className="btn btn-primary quote-button">{btnGithub}</a>
            </div>
        </div>
    )
}