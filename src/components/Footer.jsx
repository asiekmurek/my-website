import React from 'react';

export default function Footer({repo}) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-bottom">
            <a className="navbar-brand footer-text" href={`${repo}`}>Go to <b>GitHub</b> and see code of this website !</a>
        </nav>
    )
}