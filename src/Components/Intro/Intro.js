import React from 'react';

import QuakeIntroImage from '../../Images/QuakeIntroImage.png';
import SocialDungeonsIntroImage from '../../Images/SocialDungeonsIntroImage.png';
import ScratchyIntroImage from '../../Images/ScratchyIntroImage.png'

import ArrowDownImage from '../../Images/arrow-down.svg'

import './Intro.css'

const Intro = () => {

    const scrollToPrologue = () => {
        var element = document.querySelector('#PROLOGUE');

        if (element) {
            var topOfElement = element.offsetTop - 73;

            window.scroll({ top: topOfElement, behavior: "smooth" });
        };
    }

    return (
        <section className='intro-container'>
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
                    <h1 className='text name'>THOMAS RAVENEAU</h1>
                </div>
                <div className='text-container'>
                    <h2 className='text job'>Game programmer</h2>
                </div>
            </div>
            <div className='arrow-container'>
                <button className='arrow-button' onClick={scrollToPrologue}>
                    <img className='arrow-image' src={ArrowDownImage} alt='Double arrow down button'></img>
                </button>
            </div>
        </section>
    );
}

export default Intro;