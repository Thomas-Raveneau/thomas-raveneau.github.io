import React, { useState, useEffect, useRef } from 'react';

import RedirectButton from './RedirectButton';

import './Header.css'

const Header = ({ headerVisibilityFunction }) => {
    const [prologueActive, setPrologueActive] = useState(true);
    const [projectsActive, setProjectsActive] = useState(false);
    const [resumeActive, setResumeActive] = useState(false);
    const [contactsActive, setContactsActive] = useState(false);

    const visibilityRef = useRef();

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

    useEffect(() => {
        headerVisibilityFunction.current = handleVisibilityAnimation;
    }, [])

    const handleVisibilityAnimation = () => {
        const currentHeader = visibilityRef.current;

        currentHeader.classList.toggle("Is-Visible");
    }

    const handleRedirection = (redirectTo) => {
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

    const redirectButtons = () => {
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
        <header className="Header" ref={visibilityRef}>
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