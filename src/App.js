import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Prologue from './Components/Prologue/Prologue';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contacts from './Components/Contacts/Contacts';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isHeaderVisible, _setIsHeaderVisible] = useState(false);
  const visibilityHeaderHeight = 300;
  const headerVisibilityRef = useRef(isHeaderVisible);
  const headerVisibilityFunctionRef = useRef(null);

  useEffect(() => {
  }, []);

  const setIsHeaderVisible = (isVisible) => {
    headerVisibilityRef.current = isVisible;
    _setIsHeaderVisible(isVisible);
  }

  const handleHeaderVisibility = (e) => {
    if (window.pageYOffset >= visibilityHeaderHeight && !headerVisibilityRef.current) {
      headerVisibilityFunctionRef.current()
      setIsHeaderVisible(true);
    }
    else if (window.pageYOffset < visibilityHeaderHeight && headerVisibilityRef.current) {
      headerVisibilityFunctionRef.current()
      setIsHeaderVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleHeaderVisibility);
    setIsLoaded(true);

  }, [])

  useEffect(() => {
    if (isLoaded) {
      setIsPageLoaded(true);
    }
  }, [isLoaded]);

  if (isPageLoaded) {
    return (
      <div className="App" onScroll={handleHeaderVisibility}>
        <Header
          headerVisibilityFunction={headerVisibilityFunctionRef}
        />
        <Intro />
        <Prologue />
        <Portfolio />
        <Resume />
        <Contacts />
      </div>
    );
  }
  else {
    return (
      <div></div>
    );
  }
}

export default App;
