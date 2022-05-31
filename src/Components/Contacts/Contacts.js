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
        <section className='contacts-container' id='CONTACTS' ref={sectionVisibilityRef}>
            <div className='section-title-container'>
                <h2 className='section-title-text'>CONTACTS</h2>
                <p className='section-desc-text'>Do not hesitate to contact me anytime, anywhere !</p>
            </div>
            <div className='contacts-content-container'>
                <div className='contacts-content-container-left'>
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
                <div className='contacts-content-container-right'>

                </div>
            </div>
        </section>
    );
};

export default Contacts;