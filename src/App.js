import React from 'react';
import NavBarMain from './NavBarMain';
import Stage from './Stage';
import Feature from './Feature';
import arr from './FeatureContent';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {  
  return (
    <>      
      <NavBarMain />
      <Stage />
      {arr.map(({a, b, dark, order, hide, alt}, i)=>
        <Feature key={i} col1={a} col2={b} dark={dark} order={order} hide={hide} alt={alt}/>
      )}      
    </>
  );
}

export default App;