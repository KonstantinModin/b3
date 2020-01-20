import React from 'react';
import NavBarMain from './NavBarMain';
import Stage from './Stage';
import Feature from './Feature';
import arr from './FeatureContent';
// import FeatureTwo from './FeatureTwo';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  
  
  return (
    <>      
      <NavBarMain />
      <Stage />
      {arr.map(([a,b,dark],i)=><Feature key={i} col1={a} col2={b} dark={dark}/>)}      
      {/* <FeatureTwo />  */}
      {/* <div className="border">Some shit</div>      */}
    </>
  );
}

export default App;
