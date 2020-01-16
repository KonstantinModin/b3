import React from 'react';
import NavBarMain from './NavBarMain';
import Stage from './Stage';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>      
      <NavBarMain />
      <Stage />
      <FeatureOne />      
      <FeatureTwo /> 
      {/* <div className="border">Some shit</div>      */}
    </>
  );
}

export default App;
