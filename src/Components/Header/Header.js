import React, { useState, useEffect, useRef } from 'react';

import RedirectButton from './RedirectButton';

import './Header.css'


const Header = ({ headerVisibilityFunction }) => {
    const visibilityRef = useRef();
    const [showButtonsRow, _setShowButtonsRow] = useState(true);
    const showButtonsRowRef = useRef(showButtonsRow);
    const [showDropdown, setShowDropdown] = useState(false);

    const setShowButtonsRow = (show) => {
        showButtonsRowRef.current = show;
        _setShowButtonsRow(show);
    }

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
        window.addEventListener("resize", handleHeaderWidth);
        handleHeaderWidth();
    }, [])

    const handleHeaderWidth = (e) => {
        const screenWidth = document.body.clientWidth;

        if (screenWidth <= 950 && showButtonsRowRef.current === true) {
            setShowButtonsRow(false)
            return;
        }
        else if (screenWidth > 950 && showButtonsRowRef.current === false) {
            setShowButtonsRow(true)
            return;
        }
    };

    const handleVisibilityAnimation = () => {
        const currentHeader = visibilityRef.current;

        currentHeader.classList.toggle("Is-Visible");

        setShowDropdown(false);
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

                    if (showDropdown === true) {
                        setShowDropdown(false)
                    }
                }
            }
            return null;
        });
    }

    const redirectButtons = (isDropdown) => {
        const res = [];

        Object.entries(redirectionDatas).map(([key, value], index) => {
            res.push(
                <RedirectButton key={value.name} name={value.name} handleRedirection={handleRedirection} isDropdown={isDropdown} />
            );
            return null;
        });

        return res;
    }

    const handleShowDropdown = () => {
        if (showButtonsRowRef.current === false) {
            if (showDropdown === false) {
                setShowDropdown(true);
            }
            if (showDropdown === true) {
                setShowDropdown(false);
            }
        }
        else {
            setShowDropdown(false);
        }
    }

    const handleRedirectButtonsResponsive = () => {
        if (showButtonsRowRef.current === true) {
            return (
                <div className='Header-RightCol'>
                    {redirectButtons(false)}
                </div>
            );
        } else {
            return (
                <div className='Header-RightCol'>
                    <div className="dropdown">
                        <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" onClick={handleShowDropdown}>
                            Menu
                        </button>
                    </div>
                </div>
            );
        }
    };

    const dropdownView = () => {
        if (showDropdown) {
            return (
                <div className='col dropdown-buttons p-0'>
                    {redirectButtons(true)}
                </div>
            );
        }
    }

    return (
        <div>
            <header className="Header" ref={visibilityRef}>
                <div className='Header-LeftCol'>
                    <button className='Home-Button' onClick={scrollToTop}>Thomas Raveneau</button>
                </div>
                {handleRedirectButtonsResponsive()}
            </header>
            {dropdownView()}
        </div>
    );
}

export default Header;