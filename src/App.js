import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Prologue from './Components/Prologue/Prologue';
import Portfolio from './Components/Portfolio/Portfolio';
import Resume from './Components/Resume/Resume';
import Contacts from './Components/Contacts/Contacts';

const App = () => {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isHeaderVisible, _setIsHeaderVisible] = useState(false);
  const visibilityHeaderHeight = 300;
  const headerVisibilityRef = useRef(isHeaderVisible);
  const headerVisibilityFunctionRef = useRef(null);

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

    const onPageLoad = () => {
      setTimeout(() => {
        setIsPageLoaded(true);

      }, 1000)
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [])

  const loadingView = () => {
    if (!isPageLoaded) {
      return (
        <div className='container-fluid loading-container'>
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="App" onScroll={handleHeaderVisibility}>
      <Header
        headerVisibilityFunction={headerVisibilityFunctionRef}
      />
      {loadingView()}
      <Intro />
      <Prologue />
      <Portfolio />
      <Resume />
      <Contacts />
    </div>
  );
}

export default App;
