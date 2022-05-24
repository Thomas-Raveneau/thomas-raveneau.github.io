import React from 'react';

import QuakeImage from '../../images/QuakeIntroImage.png';
import SocialDungeonsIntroImage from '../../images/SocialDungeonsIntroImage.png';
import ScratchyIntroImage from '../../images/ScratchyIntroImage.png'

import './Intro.css'

const Intro = () => {
    return (
        <div className='container'>
            <div className='images-container'>
                <div className='image-container'>
                    <img className='image-intro' src={SocialDungeonsIntroImage} alt='tmp'></img>
                </div>
                <div className='image-container'>
                    <img className='image-intro' src={QuakeImage} alt='tmp'></img>
                </div>
                <div className='image-container'>
                    <img className='image-intro' src={ScratchyIntroImage} alt='tmp'></img>
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
        </div>
    );
}

export default Intro;