import React, { useEffect, useRef } from 'react';

import RedirectButton from './RedirectButton';

import './Header.css'


const Header = ({ headerVisibilityFunction }) => {
    const visibilityRef = useRef();

    const redirectionDatas = {
        prologue: {
            name: "PROLOGUE",

        },
        projects: {
            name: "PORTFOLIO",

        },
        resume: {
            name: "RESUME",

        },
        contacts: {
            name: "CONTACTS",

        },
    }

    useEffect(() => {
        headerVisibilityFunction.current = handleVisibilityAnimation;
    }, [])

    const handleVisibilityAnimation = () => {
        const currentHeader = visibilityRef.current;

        currentHeader.classList.toggle("Is-Visible");
    }

    const scrollToTop = () => {
        window.scroll({ top: 0, behavior: "smooth" });
    }

    const handleRedirection = (redirectTo) => {
        Object.entries(redirectionDatas).map(([key, value], index) => {
            if (value.name === redirectTo) {
                var element = document.querySelector('#' + redirectTo);

                if (element) {
                    var topOfElement = element.offsetTop - 73;

                    window.scroll({ top: topOfElement, behavior: "smooth" });
                }
            }
            return null;
        });
    }

    const redirectButtons = () => {
        const res = [];

        Object.entries(redirectionDatas).map(([key, value], index) => {
            res.push(
                <RedirectButton key={value.name} name={value.name} handleRedirection={handleRedirection} />
            );
            return null;
        });

        return res;
    }

    return (
        <header className="Header" ref={visibilityRef}>
            <div className='Header-LeftCol'>
                <button className='Home-Button' onClick={scrollToTop}>Thomas Raveneau</button>
            </div>
            <div className='Header-RightCol'>
                {redirectButtons()}
            </div>
        </header>
    );
}

export default Header;