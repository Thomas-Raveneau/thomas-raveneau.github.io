import React, { useState } from 'react';

import RedirectButton from './RedirectButton';

import './Header.css'

const Header = function () {
    const [prologueActive, setPrologueActive] = useState(true);
    const [projectsActive, setProjectsActive] = useState(false);
    const [resumeActive, setResumeActive] = useState(false);
    const [contactsActive, setContactsActive] = useState(false);

    const redirectionDatas = {
        prologue: {
            name: "PROLOGUE",
            isActive: prologueActive,
            setIsActive: setPrologueActive
        },
        projects: {
            name: "PROJECTS",
            isActive: projectsActive,
            setIsActive: setProjectsActive
        },
        resume: {
            name: "RESUME",
            isActive: resumeActive,
            setIsActive: setResumeActive
        },
        contacts: {
            name: "CONTACTS",
            isActive: contactsActive,
            setIsActive: setContactsActive
        },
    }

    const handleRedirection = function (redirectTo) {
        Object.entries(redirectionDatas).map(([key, value], index) => {
            if (value.name === redirectTo) {
                value.setIsActive(true);
            }
            else if (value.isActive) {
                value.setIsActive(false);
            }
            return null;
        });
    }

    const redirectButtons = function () {
        const res = [];

        Object.entries(redirectionDatas).map(([key, value], index) => {
            res.push(
                <RedirectButton key={value.name} name={value.name} isActive={value.isActive} handleRedirection={handleRedirection} />
            );
            return null;
        });

        return res;
    }

    return (
        <header className="Header">
            <div className='Header-LeftCol'>
                <button className='Home-Button' >Thomas Raveneau</button>
            </div>
            <div className='Header-RightCol'>
                {redirectButtons()}
            </div>
        </header>
    );
}

export default Header;