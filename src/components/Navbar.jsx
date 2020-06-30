import React from 'react';

export default function Navbar({name}) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand navbar-header" href="#">
                  {name}
             </a>
        </nav>
    );
}