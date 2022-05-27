import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import IsElementVisible from '../../Utils/IsElementVisible';

import QuakeImage from '../../Images/QuakeIntroImage.png'
import SocialDungeonsImage from '../../Images/SocialDungeonsImage.png'
import ScratchyImage from '../../Images/ScratchyIntroImage.png'
import UnrealImage from '../../Images/unreal.png'
import CppImage from '../../Images/cpp.svg'
import GodotImage from '../../Images/godot.png'
import OpenglImage from '../../Images/opengl.svg'


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
        <section className='portfolio-container' id='PORTFOLIO' ref={visibilityRef}>
            <div className='section-title-container'>
                <h2 className='section-title-text'>PORTFOLIO</h2>
                <p className='section-desc-text'>Discover my personal projects !</p>
            </div>
            <div className='portofolio-project-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={QuakeImage} alt='Quake (remake) by Thomas Raveneau screenshot'></img>
                </div>
                <div className='project-text-container'>
                    <h3>Quake (remake)</h3>
                    <div className='project-techno-container'>
                        <img className='project-techno-image' src={UnrealImage} alt='Unreal Engine logo'></img>
                        <img className='project-techno-image' src={CppImage} alt='C++ logo'></img>
                    </div>
                </div>
            </div>
            <div className='portofolio-project-container'>
                <div className='project-text-container dark-project-text-container'>
                    <h3>Social Dungeons</h3>
                    <div className='project-techno-container'>
                        <img className='project-techno-image' src={GodotImage} alt='Godot Engine logo'></img>
                    </div>
                </div>
                <div className='project-image-container'>
                    <img className='project-image' src={SocialDungeonsImage} alt='Social Dungeons by Thomas Raveneau screenshot'></img>
                </div>
            </div>
            <div className='portofolio-project-container'>
                <div className='project-image-container'>
                    <img className='project-image' src={ScratchyImage} alt='Scratchy library by Thomas Raveneau screenshot'></img>
                </div>
                <div className='project-text-container'>
                    <h3>Scratchy</h3>
                    <div className='project-techno-container'>
                        <img className='project-techno-image' src={CppImage} alt='C++ logo'></img>
                        <img className='project-techno-image' src={OpenglImage} alt='OpenGL logo'></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;