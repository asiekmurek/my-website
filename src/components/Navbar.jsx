import React from 'react';

export default function Navbar({name}) {
    return (
        <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                   {name}
             </a>
        </nav>
    );
}