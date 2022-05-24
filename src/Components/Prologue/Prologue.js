import React, { useRef } from 'react';

import IsElementVisible from '../../Utils/IsElementVisible';

import './Prologue.css'

const Prologue = () => {
    const visibilityRef = useRef();
    const isVisible = IsElementVisible(visibilityRef, '0px');

    if (isVisible) {
        // console.log("PROLOGUE VISIBLE");
    }

    return (
        <div>
            <p ref={visibilityRef}>Prologue</p>
        </div>
    );
}

export default Prologue;