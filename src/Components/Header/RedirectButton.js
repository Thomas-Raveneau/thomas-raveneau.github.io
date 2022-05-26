import React from 'react';
import { useSelector } from "react-redux";

import './RedirectButton.css'



const RedirectButton = function ({ name, handleRedirection }) {
    const selectIsActive = (state) => {
        return state.app.currentSection === name ? true : false;
    };

    const isActive = useSelector(selectIsActive);

    return (
        isActive ?
            <button className={"Redirect-Button Active"} onClick={() => (handleRedirection(name))}> {name}</button>
            :
            <button className={"Redirect-Button"} onClick={() => (handleRedirection(name))}> {name}</button>
    );
}

export default RedirectButton;