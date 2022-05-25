import React from 'react';

import QuakeIntroImage from '../../images/QuakeIntroImage.png';
import SocialDungeonsIntroImage from '../../images/SocialDungeonsIntroImage.png';
import ScratchyIntroImage from '../../images/ScratchyIntroImage.png'

import ArrowDownImage from '../../images/arrow-down.svg'

import './Intro.css'

const Intro = () => {

    const handleDownNavigation = () => {
        console.log("here")
    };

    return (
        <div className='container'>
            <div className='images-container'>
                <div className='image-container'>
                    <img className='image-intro' src={SocialDungeonsIntroImage} alt='SocialDungeons game by Thomas Raveneau screenshot'></img>
                </div>
                <div className='image-container'>
                    <img className='image-intro' src={QuakeIntroImage} alt='Quake (remake) game by Thomas Raveneau screenshot'></img>
                </div>
                <div className='image-container'>
                    <img className='image-intro' src={ScratchyIntroImage} alt='Scratcy graphical library by Thomas Raveneau screenshot'></img>
                </div>
            </div>
            <div className='texts-container'>
                <div className='text-container'>
                    <p className='text name'>THOMAS RAVENEAU</p>
                </div>
                <div className='text-container'>
                    <p className='text job'>Game programmer</p>
                </div>
            </div>
            <div className='arrow-container'>
                <button className='arrow-button' onClick={handleDownNavigation}>
                    <img className='arrow-image' src={ArrowDownImage} alt='Double arrow down image to click on'></img>
                </button>
            </div>
        </div>
    );
}

export default Intro;