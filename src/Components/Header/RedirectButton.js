import React from 'react';
import { useSelector } from "react-redux";

import './RedirectButton.css'



const RedirectButton = function ({ name, handleRedirection, isDropdown }) {
    const selectIsActive = (state) => {
        return state.app.currentSection === name ? true : false;
    };

    const isActive = useSelector(selectIsActive);

    return (
        isActive ?
            <button className={!isDropdown ? "Redirect-Button Active" : "Redirect-Button Active DropdownActive"} onClick={() => (handleRedirection(name))}> {name}</button>
            :
            <button className={!isDropdown ? "Redirect-Button" : "Redirect-Button DropdownActive"} onClick={() => (handleRedirection(name))}> {name}</button>
    );
}

export default RedirectButton;