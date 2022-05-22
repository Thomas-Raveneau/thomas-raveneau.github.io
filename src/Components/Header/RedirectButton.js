import React from 'react';

import './RedirectButton.css'

const RedirectButton = function ({ name, isActive, handleRedirection }) {

    return (
        isActive ?
            <button className={"Redirect-Button Active"} onClick={() => (handleRedirection(name))}> {name}</button>
            :
            <button className={"Redirect-Button"} onClick={() => (handleRedirection(name))}> {name}</button>
    );
}

export default RedirectButton;