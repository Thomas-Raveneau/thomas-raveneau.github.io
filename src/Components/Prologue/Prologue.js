import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import IsElementVisible from '../../Utils/IsElementVisible';

import SkillsCategoryIcon from '../../Images/SkillsCategoryIcon.png';
import EducationCategoryIcon from '../../Images/EducationCategoryIcon.png';
import HobbiesCategoryIcon from '../../Images/HobbiesCategoryIcon.png';

import './Prologue.css';

const Prologue = () => {
    const dispatch = useDispatch();

    const sectionVisibilityRef = useRef();
    const categoriesVisibilityRef = useRef();
    const firstCategoryRef = useRef();
    const secondCategoryRef = useRef();
    const thirdCategoryRef = useRef();

    const isSectionVisible = IsElementVisible(sectionVisibilityRef, '-175px');
    const isCategoriesVisible = IsElementVisible(categoriesVisibilityRef, '-100px');

    useEffect(() => {
        if (isSectionVisible) {
            dispatch({type: 'app/setCurrentSection', newSection: 'PROLOGUE'})
        }
    }, [isSectionVisible]);

    useEffect(() => {
        if (isCategoriesVisible) {
            const firstCategoryDiv = firstCategoryRef.current;
            const secondCategoryDiv = secondCategoryRef.current;
            const thirdCategoryDiv = thirdCategoryRef.current;

            firstCategoryDiv.classList.add('first-category-visible');
            secondCategoryDiv.classList.add('second-category-visible');
            thirdCategoryDiv.classList.add('third-category-visible');
        }
    }, [isCategoriesVisible]);

    return (
        <section className='container-fluid fill bg-category-light py-category' id='PROLOGUE' ref={sectionVisibilityRef}>
            <div className='section-title-container'>
                <h2 className='section-title-text'>PROLOGUE</h2>
                <p className='section-desc-text'>Welcome to my portofolio website !</p>
            </div>
            <div className='row justify-content-center' ref={categoriesVisibilityRef}>
                <div className='col-lg-4 col-md-12 mb-5 category-container' ref={firstCategoryRef}>
                    <div className='category-icon-container mb-3'>
                        <div className='category-icon-border'>
                            <img className='category-icon' src={SkillsCategoryIcon} alt='Skills category icon'></img>
                        </div>
                    </div>
                    <h3 className='category-title'>Technical skills</h3>
                    <p className='category-content'>Unreal Engine, Godot, Unity</p>
                    <p className='category-content'>C, C++, C#, Python, Javascript</p>
                    <p className='category-content'>React.JS, React native, Vue.JS</p>
                </div>
                <div className='col-lg-4 col-md-12 mb-5 category-container' ref={secondCategoryRef}>
                    <div className='category-icon-container mb-3'>
                        <div className='category-icon-border'>
                            <img className='category-icon' src={EducationCategoryIcon} alt='Education category icon'></img>
                        </div>
                    </div>
                    <h3 className='category-title'>Education</h3>
                    <p className='category-content'>EPITECH, Paris, France</p>
                    <p className='category-content'>Keimyung University, Daegu, South Korea</p>
                </div>
                <div className='col-lg-4 col-md-12 category-container' ref={thirdCategoryRef}>
                    <div className='category-icon-container mb-3'>
                        <div className='category-icon-border'>
                            <img className='category-icon' src={HobbiesCategoryIcon} alt='Hobbies category icon'></img>
                        </div>
                    </div>
                    <h3 className='category-title'>Hobbies</h3>
                    <p className='category-content'>Video games, Cinema, Music</p>
                    <p className='category-content'>Tennis, Climbing</p>
                    <p className='category-content'>Space, Astronomy</p>
                </div>
            </div>
        </section>
    );
}

export default Prologue;