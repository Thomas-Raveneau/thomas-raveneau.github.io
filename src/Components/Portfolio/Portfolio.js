import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import IsElementVisible from '../../Utils/IsElementVisible';

import QuakeImage from '../../Images/QuakeIntroImage.png'
import SocialDungeonsImage from '../../Images/SocialDungeonsImage.png'
import ScratchyImage from '../../Images/ScratchyIntroImage.png'
import UnrealImage from '../../Images/unreal.png'
import CppImage from '../../Images/cpp.png'
import GodotImage from '../../Images/godot.png'
import OpenglImage from '../../Images/opengl.png'
import YoutubeImage from '../../Images/youtube.png'
import GithubImage from '../../Images/github.png'

import './Portfolio.css';

const QuakeSourceLink = 'https://github.com/Thomas-Raveneau/Quake';
const SocialDungeonsSourceLink = 'https://github.com/Thomas-Raveneau/SocialDungeons';
const ScratchySourceLink = 'https://github.com/Thomas-Raveneau/Scratchy';

const Portfolio = () => {
    const dispatch = useDispatch();

    const sectionVisibilityRef = useRef();
    const quakeVisibilityRef = useRef();
    const socialDungeonsVisibilityRef = useRef();
    const scratchyVisibilityRef = useRef();

    const isSectionVisible = IsElementVisible(sectionVisibilityRef, '-175px');
    const isQuakeVisible = IsElementVisible(quakeVisibilityRef, '-200px');
    const isSocialDungeonsVisible = IsElementVisible(socialDungeonsVisibilityRef, '-200px');
    const isScratchyVisible = IsElementVisible(scratchyVisibilityRef, '-200px');

    useEffect(() => {
        if (isSectionVisible) {
            dispatch({ type: 'app/setCurrentSection', newSection: 'PORTFOLIO' })
        }
    }, [isSectionVisible]);

    useEffect(() => {
        if (isQuakeVisible) {
            const quakeProjectProjectDiv = quakeVisibilityRef.current;

            quakeProjectProjectDiv.classList.add('project-visible');
        }

        if (isSocialDungeonsVisible) {
            const socialDungeonsProjectProjectDiv = socialDungeonsVisibilityRef.current;

            socialDungeonsProjectProjectDiv.classList.add('project-visible');
        }

        if (isScratchyVisible) {
            const scratchyProjectProjectDiv = scratchyVisibilityRef.current;

            scratchyProjectProjectDiv.classList.add('project-visible');
        }
    }, [isQuakeVisible, isSocialDungeonsVisible, isScratchyVisible]);

    const redirectToLink = (url) => {
        window.open(url, '_blank').focus();
    };

    return (
        <section className='portfolio-container' id='PORTFOLIO' ref={sectionVisibilityRef}>
            <div className='section-title-container'>
                <h2 className='section-title-text'>PORTFOLIO</h2>
                <p className='section-desc-text'>Discover my personal projects !</p>
            </div>
            <div className='portofolio-project-container project-right' ref={quakeVisibilityRef}>
                <div className='project-image-container'>
                    <img className='project-image' src={QuakeImage} alt='Quake (remake) by Thomas Raveneau screenshot'></img>
                </div>
                <div className='project-text-container'>
                    <h3 className='project-title project-title-right'>QUAKE (REMAKE)</h3>
                    <p className='project-description'>
                        Remake of the classic video game from the 90s. This FPS game will allow you to play online with your friends,
                        the goal being to eliminate your opponents as many times as possible in the allotted time.
                        To do this, you will have at your disposal 2 different weapons, a rocket launcher and a laser gun.
                        Your knowledge of the map will make the difference between victory or defeat by recovering the various bonuses
                        distributed throughout the map at the right time. To your weapons and enjoy!
                    </p>
                    <div className='project-bottom-container'>
                        <div className='project-techno-container'>
                            <img className='project-techno-image' src={UnrealImage} alt='Unreal Engine logo' title='Unreal Engine'></img>
                            <img className='project-techno-image' src={CppImage} alt='C++ logo' title='C++'></img>
                        </div>
                        <div className='project-link-container'>
                            <button className='project-link-button' onClick={() => { redirectToLink() }}>
                                <div className='project-link-image-container'>
                                    <img className='project-link-image' src={YoutubeImage} alt='Youtube logo'></img>
                                </div>
                                <div className='project-link-text-container'>
                                    Watch trailer
                                </div>
                            </button>

                            <button className='project-link-button' onClick={() => { redirectToLink(QuakeSourceLink) }}>
                                <div className='project-link-image-container'>
                                    <img className='project-link-image' src={GithubImage} alt='Github logo'></img>
                                </div>
                                <div className='project-link-text-container'>
                                    Source code
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <div className='portofolio-project-container project-left' ref={socialDungeonsVisibilityRef}>
                <div className='project-text-container'>
                    <h3 className='project-title project-title-left'>SOCIAL DUNGEONS</h3>
                    <p className='project-description'>
                        Discover a 2D game where you play as a knight with multiple powers and abilities,
                        such as thrusting spikes or lightning bolts. You will cross dungeons in which each
                        of the rooms will be guarded by many surprises, monsters and traps will give you a hard time,
                        destroy them and move on to the next room by leveling up your abilities along the way.
                        In each dungeon, you will have to kill the final boss in order to complete the dungeon as quickly as you can.
                        Be careful for what awaits you!
                    </p>
                    <div className='project-bottom-container'>
                        <div className='project-link-container project-right'>
                            <button className='project-link-button' onClick={() => { redirectToLink() }}>
                                <div className='project-link-image-container'>
                                    <img className='project-link-image' src={YoutubeImage} alt='Youtube logo'></img>
                                </div>
                                <div className='project-link-text-container'>
                                    Watch trailer
                                </div>
                            </button>

                            <button className='project-link-button' onClick={() => { redirectToLink(SocialDungeonsSourceLink) }}>
                                <div className='project-link-image-container'>
                                    <img className='project-link-image' src={GithubImage} alt='Github logo'></img>
                                </div>
                                <div className='project-link-text-container'>
                                    Source code
                                </div>
                            </button>
                        </div>
                        <div className='project-techno-container project-right'>
                            <img className='project-techno-image' src={GodotImage} alt='Godot Engine logo' title='Godot'></img>
                        </div>
                    </div>
                </div>
                <div className='project-image-container'>
                    <img className='project-image' src={SocialDungeonsImage} alt='Social Dungeons by Thomas Raveneau screenshot'></img>
                </div>
            </div>
            <div className='portofolio-project-container project-right' ref={scratchyVisibilityRef}>
                <div className='project-image-container'>
                    <img className='project-image' src={ScratchyImage} alt='Scratchy library by Thomas Raveneau screenshot'></img>
                </div>
                <div className='project-text-container'>
                    <h3 className='project-title project-title-right'>SCRATCHY</h3>
                    <p className='project-description'>
                        I present to you my graphics library. It's not very advanced but the goal was more to understand the underside
                        of game engines such as Unreal Engine, Godot or Unity. I am now able to understand how shaders, texturing, texture mapping works.
                        With this you can arrange different 3D and 2D shapes in an environment and add the textures you want.
                        A more advanced version will arrive next year!
                    </p>
                    <div className='project-bottom-container'>
                        <div className='project-techno-container'>
                            <img className='project-techno-image' src={CppImage} alt='C++ logo' title='C++'></img>
                            <img className='project-techno-image project-techno-long-image' src={OpenglImage} alt='OpenGL logo' title='OpenGL'></img>
                        </div>
                        <div className='project-link-container'>
                            <button className='project-link-button' onClick={() => { redirectToLink() }}>
                                <div className='project-link-image-container'>
                                    <img className='project-link-image' src={YoutubeImage} alt='Youtube logo'></img>
                                </div>
                                <div className='project-link-text-container'>
                                    Watch trailer
                                </div>
                            </button>

                            <button className='project-link-button' onClick={() => { redirectToLink(ScratchySourceLink) }}>
                                <div className='project-link-image-container'>
                                    <img className='project-link-image' src={GithubImage} alt='Github logo'></img>
                                </div>
                                <div className='project-link-text-container'>
                                    Source code
                                </div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Portfolio;