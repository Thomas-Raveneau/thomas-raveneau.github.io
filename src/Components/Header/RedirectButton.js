import React, { useState, useEffect } from 'react';

import './RedirectButton.css'

const RedirectButton = function ({ redirectTo, OnUpdateActive, RedirectUpdateFunction }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        RedirectUpdateFunction.current = onParentUpdate;
    }, [])

    const handleRedirection = function () {
        OnUpdateActive(redirectTo);
    }

    const onParentUpdate = function (activeRedirect) {
        if (redirectTo === activeRedirect) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }

    return (
        isActive ?
            <button className={"Redirect-Button Active"} id={redirectTo} onClick={handleRedirection}> {redirectTo}</button>
            :
            <button className={"Redirect-Button"} id={redirectTo} onClick={handleRedirection}> {redirectTo}</button>
    );
}

export default RedirectButton;