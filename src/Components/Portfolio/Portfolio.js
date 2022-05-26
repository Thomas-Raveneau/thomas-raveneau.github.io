import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import IsElementVisible from '../../Utils/IsElementVisible';

import './Portfolio.css';

const Portfolio = () => {
    const visibilityRef = useRef();
    const isVisible = IsElementVisible(visibilityRef, '-200px');
    const dispatch = useDispatch();

    useEffect(() => {
        if (isVisible) {
            dispatch({ type: 'app/setCurrentSection', newSection: 'PORTFOLIO' })
        }
    }, [isVisible]);

    return (
        <div className='portfolio-container' id='PORTFOLIO' ref={visibilityRef}>
            portofolio
        </div>
    );
};

export default Portfolio;