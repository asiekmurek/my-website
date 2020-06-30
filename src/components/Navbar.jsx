import React from 'react';

export default function Navbar({name}) {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand navbar-header" href="#">
                  {name}
             </a>
        </nav>
    );
}