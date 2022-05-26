import React, { useState, useEffect, useRef } from 'react';
import './App.css';

import Header from './Components/Header/Header';
import Intro from './Components/Intro/Intro';
import Prologue from './Components/Prologue/Prologue';
import Portfolio from './Components/Portfolio/Portfolio';



const App = () => {
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
  }, [])

  return (
    <div className="App" onScroll={handleHeaderVisibility}>
      <Header
        headerVisibilityFunction={headerVisibilityFunctionRef}
      />
      <Intro />
      <Prologue />
      <Portfolio />
    </div>
  );
}

export default App;