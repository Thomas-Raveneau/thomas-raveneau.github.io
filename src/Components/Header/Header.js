import React, { useRef } from 'react';

import RedirectButton from './RedirectButton';

import './Header.css'

const Header = function () {
    const RedirectUpdateFunctions = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
    ]

    const RedirectionRoutes = {
        Home: "Home",
        Prologue: "PROLOGUE",
        Projects: "PROJECTS",
        Resume: "RESUME",
        Contacts: "CONTACTS"
    };

    const UpdateActiveRedirect = function (activeRedirect) {
        for (let i = 0; i !== RedirectUpdateFunctions.length; i++) {
            RedirectUpdateFunctions[i].current(activeRedirect);
        }
    };

    return (
        <header className="Header">
            <div className='Header-LeftCol'>
                <button>Thomas Raveneau</button>
            </div>
            <div className='Header-RightCol' id='Header-RightCol'>
                <RedirectButton redirectTo={RedirectionRoutes.Prologue} OnUpdateActive={UpdateActiveRedirect} RedirectUpdateFunction={RedirectUpdateFunctions[0]} />
                <RedirectButton redirectTo={RedirectionRoutes.Projects} OnUpdateActive={UpdateActiveRedirect} RedirectUpdateFunction={RedirectUpdateFunctions[1]} />
                <RedirectButton redirectTo={RedirectionRoutes.Resume} OnUpdateActive={UpdateActiveRedirect} RedirectUpdateFunction={RedirectUpdateFunctions[2]} />
                <RedirectButton redirectTo={RedirectionRoutes.Contacts} OnUpdateActive={UpdateActiveRedirect} RedirectUpdateFunction={RedirectUpdateFunctions[3]} />
            </div>
        </header>
    );
}

export default Header;