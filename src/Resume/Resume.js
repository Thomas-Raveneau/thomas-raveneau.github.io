import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import IsElementVisible from '../Utils/IsElementVisible';

import CImage from '../Images/c.png'
import CppImage from '../Images/cpp.png'
import CSharpImage from '../Images/csharp.svg'
import PythonImage from '../Images/python.png'
import TypescriptImage from '../Images/typescript.png'
import SQLImage from '../Images/sql.png'

import UnrealImage from '../Images/unreal.png'
import GodotImage from '../Images/godot.png'
import UnityImage from '../Images/unity.png'
import GitImage from '../Images/git.png'
import ConsoleImage from '../Images/console.png'
import VStudioImage from '../Images/visual-studio.png'
import NodeImage from '../Images/node.png'

import ReactImage from '../Images/react.png'
import VueImage from '../Images/vuejs.png'
import ExpressImage from '../Images/express.png'

import './Resume.css';

const Resume = () => {
    const dispatch = useDispatch();

    const sectionVisibilityRef = useRef();
    const isSectionVisible = IsElementVisible(sectionVisibilityRef, '-175px');

    useEffect(() => {
        if (isSectionVisible) {
            dispatch({ type: 'app/setCurrentSection', newSection: 'RESUME' })
        }
    }, [isSectionVisible]);

    return (
        <section className='resume-container' id='RESUME' ref={sectionVisibilityRef}>
            <div className='section-title-container'>
                <h2 className='section-title-text'>RESUME</h2>
                <p className='section-desc-text'>Know more about my profile !</p>
            </div>



            <div className='resume-separator resume-margin-between'>
                <div className='resume-margin-between'>
                    <div className='resume-name-container'>
                        <h1 className='resume-name-text resume-colored-text'>THOMAS</h1>
                        <h1 className='resume-name-text'>RAVENEAU</h1>
                    </div>
                    <div>
                        <h2 className='resume-job-text'>GAME PROGRAMMER</h2>
                    </div>
                </div>
                <div className='resume-margin-between'>
                    <p className='resume-profile-info-text'>Developer student since 4 years and before that amateur in this domain, I developed a strong passion for video games since my childhood.</p>
                    <p className='resume-profile-info-text'>In highschool, I discovered game development by creating a Monopoly game with Python.
                        Today my skills in video game development have highly evolved thanks to the projects I did with and in parralel of my studies using my passive learning of 10th art acquired since I was young, today pushing me to develop quality games where the players joy is my biggest concern.
                        Looking for end-of-studies internships from September 2022 to February 2023 and from March 2023 to August 2023.
                    </p>
                </div>
            </div>



            <div className='resume-separator resume-margin-between'>
                <h2 className='resume-category-title-text resume-margin-between'>EMPLOYMENT</h2>
                <div className='resume-content-container resume-margin-between'>
                    <div className='resume-content-left-container'>
                        <div>
                            <h3 className='resume-content-title-text'>SHAREPOINT DEVELOPPER</h3>
                            <h4 className='resume-content-location-text'>CEGEDIM, BOULOGNE-BILLANCOURT, FRANCE</h4>
                        </div>
                        <div className='resume-content-desc-container'>
                            <p className='resume-content-desc-text'>During this experience, my mission within the web communication team aimed to accomplish these objectives:</p>

                            <ul className='resume-content-desc-padding'>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Meet the needs of employees by creating internal support tools in C# (data analysis, monitoring, web tracking)</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Generation of personalized data analysis reports by filtering</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Understand the communicative vision of Cegedim imagined by the director of web communication</li>
                                <li className='resume-content-desc-text'>Development of websites within a team of developers, designers, devops</li>
                            </ul>

                            <p className='resume-content-desc-text'>Throughout this internship, the agile method was applied in order to prioritize the customer's opinion throughout the development of the various solutions that I developed. In order to meet expectations, I met daily with the client and my project manager.</p>

                            <div className='resume-content-bottom-container'>
                                <ul>
                                    <b className='resume-content-desc-text resume-content-desc-no-margin'>Languages</b>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>C#</li>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>Typescript</li>
                                </ul>
                                <ul>
                                    <b className='resume-content-desc-text resume-content-desc-no-margin'>Frameworks</b>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>Sharepoint</li>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>React.JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='resume-content-right-container'>
                        <p className='resume-content-date resume-colored-text'>Oct. 2020 - Jul. 2021</p>
                    </div>
                </div>
                <div className='resume-small-separator-container resume-margin-between'>
                    <div className='resume-small-separator '></div>
                </div>
                <div className='resume-content-container resume-margin-between'>
                    <div className='resume-content-left-container'>
                        <div>
                            <h3 className='resume-content-title-text'>FULLSTACK DEVELOPPER</h3>
                            <h4 className='resume-content-location-text'>ONEPOINT, PARIS, FRANCE</h4>
                        </div>
                        <div className='resume-content-desc-container'>
                            <p className='resume-content-desc-text'>During this experience, my mission within the DSI team aimed to achieve these objectives:</p>

                            <ul className='resume-content-desc-padding'>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Development of the main communication tool for employees</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Database development and management</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Processing of user data</li>
                                <li className='resume-content-desc-text'>Development of the vision of the director of information systems for internal communication</li>
                            </ul>

                            <p className='resume-content-desc-text'>During this internship, the agile method was applied in order to prioritize the customer's opinion throughout the development of the various solutions that I developed. In order to meet expectations, I met daily with my project manager, my technical manager and the CIO.</p>

                            <div className='resume-content-bottom-container'>
                                <ul>
                                    <b className='resume-content-desc-text resume-content-desc-no-margin'>Languages</b>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>PHP</li>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>SQL</li>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>Javascript</li>
                                </ul>
                                <ul>
                                    <b className='resume-content-desc-text resume-content-desc-no-margin'>Frameworks</b>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>Laravel</li>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>PostgreSQL</li>
                                    <li className='resume-content-desc-text resume-content-desc-no-margin'>Vue.JS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='resume-content-right-container'>
                        <p className='resume-content-date resume-colored-text'>Jul. 2019 - Dec. 2019</p>
                    </div>
                </div>
            </div>



            <div className='resume-separator resume-margin-between'>
                <h2 className='resume-category-title-text resume-margin-between'>EDUCATION</h2>
                <div className='resume-content-container resume-margin-between'>
                    <div className='resume-content-left-container'>
                        <div>
                            <h3 className='resume-content-title-text'>INFORMATION TECHNOLOGY EXPERT</h3>
                            <h4 className='resume-content-location-text'>EPITECH, PARIS, FRANCE</h4>
                        </div>
                        <div className='resume-content-desc-container'>
                            <p className='resume-content-desc-text'>Computer development school focusing its education on project-based pedagogy offering students great autonomy. I developed a sense of teamwork, of managing project, as well as the following strong technical skills:</p>

                            <ul className='resume-content-desc-padding'>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Software architecture, object-oriented programming</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Multithreading, inter-process communication</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Network programming, serialization</li>
                            </ul>

                        </div>
                    </div>
                    <div className='resume-content-right-container'>
                        <p className='resume-content-date resume-colored-text'>2018 - 2023</p>
                    </div>
                </div>
                <div className='resume-small-separator-container resume-margin-between'>
                    <div className='resume-small-separator '></div>
                </div>
                <div className='resume-content-container resume-margin-between'>
                    <div className='resume-content-left-container'>
                        <div>
                            <h3 className='resume-content-title-text'>GAME DEVELOPMENT</h3>
                            <h4 className='resume-content-location-text'>KEIMYUNG UNIVERSITY, DAEGU, SOUTH KOREA</h4>
                        </div>
                        <div className='resume-content-desc-container'>
                            <p className='resume-content-desc-text'>Realized as part of a university exchange, I specialized for 1 year in video games by expanding my technical and design skills by studying the following areas in particular:</p>

                            <ul className='resume-content-desc-padding'>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Computer graphics</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>Game design</li>
                                <li className='resume-content-desc-text resume-content-desc-no-margin'>3D modeling, rigging and animation</li>
                            </ul>

                        </div>
                    </div>
                    <div className='resume-content-right-container'>
                        <p className='resume-content-date resume-colored-text'>2021 - 2022</p>
                    </div>
                </div>
            </div>


            <div className='resume-separator resume-margin-between'>
                <h2 className='resume-category-title-text resume-margin-between'>SKILLS</h2>
                <div className='resume-margin-between'>
                    <h3 className='resume-skill-category-text'>PROGRAMMING LANGUAGES</h3>
                    <div className='resume-skill-images-container'>
                        <img className='project-techno-image image-margin' src={CImage} alt='C logo'></img>
                        <img className='project-techno-image image-margin' src={CppImage} alt='C++ logo'></img>
                        <img className='project-techno-image image-margin' src={CSharpImage} alt='C# logo'></img>
                        <img className='project-techno-image image-margin' src={PythonImage} alt='Python logo'></img>
                        <img className='project-techno-image image-margin' src={TypescriptImage} alt='Typescript logo'></img>
                        <img className='project-techno-image image-margin' src={SQLImage} alt='SQL logo'></img>
                    </div>
                </div>
                <div className='resume-margin-between'>
                    <h3 className='resume-skill-category-text'>GAME ENGINES, IDES & TOOLS</h3>
                    <div className='resume-skill-images-container'>
                        <img className='project-techno-image image-margin' src={UnrealImage} alt='Unreal Engine logo'></img>
                        <img className='project-techno-image image-margin' src={UnityImage} alt='Unity logo'></img>
                        <img className='project-techno-image image-margin' src={GodotImage} alt='Godot logo'></img>
                        <img className='project-techno-image image-margin' src={VStudioImage} alt='Visual studio logo'></img>
                        <img className='project-techno-image image-margin' src={GitImage} alt='Git logo'></img>
                        <img className='project-techno-image image-margin' src={ConsoleImage} alt='Console logo'></img>
                        <img className='project-techno-image image-margin' src={NodeImage} alt='Nodejs logo'></img>
                    </div>
                </div>
                <div className='resume-margin-between'>
                    <h3 className='resume-skill-category-text'>WEB FRAMEWORKS</h3>
                    <div className='resume-skill-images-container'>
                        <img className='project-techno-image image-margin' src={ReactImage} alt='Reactjs logo'></img>
                        <img className='project-techno-image image-margin' src={VueImage} alt='Vuejs logo'></img>
                        <img className='project-techno-image image-margin' src={ExpressImage} alt='Expressjs logo'></img>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;