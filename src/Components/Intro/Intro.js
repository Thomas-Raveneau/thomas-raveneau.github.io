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
        <section className='container-fluid bg-color p-0'>
            <div className='row fill m-0'>
                <div className='col-lg-4 col-md-12 p-0 image-container'>
                    <img className='image-intro' src={SocialDungeonsIntroImage} alt='SocialDungeons game by Thomas Raveneau screenshot'></img>
                </div>
                <div className='col-lg-4 col-md-12 p-0 image-container'>
                    <img className='image-intro' src={QuakeIntroImage} alt='Quake (remake) game by Thomas Raveneau screenshot'></img>
                </div>
                <div className='col-lg-4 col-md-12 p-0 image-container'>
                    <img className='image-intro' src={ScratchyIntroImage} alt='Scratcy graphical library by Thomas Raveneau screenshot'></img>
                </div>
            </div>

            <div className='over-container container-fluid fill position-absolute p-0'>
                <div className='over-text-container'>
                    <h1 className='over-text name-text'>THOMAS RAVENEAU</h1>
                    <h2 className='over-text job-text'>Game programmer</h2>
                </div>
                <div className='over-arrow-container'>
                    <button className='arrow-button' onClick={scrollToPrologue}>
                        <img className='arrow-image' src={ArrowDownImage} alt='Double arrow down button'></img>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Intro;