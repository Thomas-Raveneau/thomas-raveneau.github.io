import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import IsElementVisible from '../../Utils/IsElementVisible';

import ProfilePicture from '../../Images/profilepicture.jpg';
import EmailImage from '../../Images/email.png';
import LinkedinImage from '../../Images/linkedin.png';
import GithubImage from '../../Images/github-plain.png';

import './Contacts.css';

const EmailAdress = 'thomas.raveneau1@gmail.com';
const LinkedinLink = 'https://www.linkedin.com/in/thomas-raveneau/';
const GithubLink = 'https://github.com/Thomas-Raveneau/';

const Contacts = () => {
    const dispatch = useDispatch();

    const sectionVisibilityRef = useRef();
    const isSectionVisible = IsElementVisible(sectionVisibilityRef, '-175px');

    useEffect(() => {
        if (isSectionVisible) {
            dispatch({ type: 'app/setCurrentSection', newSection: 'CONTACTS' })
        }
    }, [isSectionVisible]);

    const redirectToLink = (url) => {
        window.open(url, '_blank').focus();
    };

    return (
        <section className='container-fluid fill bg-category-dark p-category' id='CONTACTS' ref={sectionVisibilityRef}>
            <div className='section-title-container'>
                <h2 className='section-title-text'>CONTACTS</h2>
                <p className='section-desc-text'>Do not hesitate to contact me anytime, anywhere !</p>
            </div>

            <div className='row contacts-content-container'>
                <div className='col-lg-3 p-0 contacts-content-container-left'>
                    <div className='contacts-profile-image-container'>
                        <img src={ProfilePicture} className='contacts-profile-image' alt='Thomas Raveneau'></img>
                    </div>
                    <h2 className='contacts-name-text'>Thomas Raveneau</h2>
                    <h3 className='contacts-job-text'>Game programmer</h3>
                    <div className='contacts-link-container'>
                        <a href={'mailto: ' + EmailAdress}>
                            <button className='contacts-link-button'>
                                <img className='contacts-link-image' src={EmailImage} alt='Email logo'></img>
                            </button>
                        </a>
                        <button className='contacts-link-button' onClick={() => { redirectToLink(LinkedinLink) }}>
                            <img className='contacts-link-image' src={LinkedinImage} alt='Linkedin logo'></img>
                        </button>
                        <button className='contacts-link-button' onClick={() => { redirectToLink(GithubLink) }}>
                            <img className='contacts-link-image' src={GithubImage} alt='Github logo'></img>
                        </button>
                    </div>
                </div>
                <div className='col-lg-8 p-0 contacts-content-container-right'>
                    <p className='contacts-content-text'>I am Thomas Raveneau studying at Epitech Paris. I am game programmer who wants to give pleasure to others through my games. I you liked my work, let's get in contact !</p>
                    <p className='contacts-content-text'>Since my childhood, I always had interest in video games, I remember playing video games on my dad's PS1 & PS2, games like Tomb Raider, Tekken and then Zelda on my own Gameboy and now playing great video games that I enjoy a lot on my PC. I love listening to music, watching movies, basically I love when stories are told to me, it's bringing a lot of feelings to me.</p>
                    <p className='contacts-content-text'>Discovering video games when I was a kid was only the beginning. Since highschool I learned programming and naturally I've fallen into video game development, starting by developping a Monopoly game in Python, then learning about game engines like Unreal, Unity or Godot.</p>
                    <p className='contacts-content-text'>I love to talk about my passions and technological advances, not only in video games industry but in all kinds of technology.</p>
                </div>
            </div>
            <div className='contacts-thanks-container'>
                <p className='contacts-thanks-text'>Thank you for visiting my portfolio.</p>
                <p className='contacts-thanks-text'>Enjoy your day !</p>
            </div>
        </section>
    );
};

export default Contacts;