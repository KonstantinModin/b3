import React from 'react';
import NavBarMain from './NavBarMain';
import Stage from './Stage';
import Feature from './Feature';
import FeatureFive from './FeatureFive';
import MoneyBack from './Money';
import Footer from './Footer';
import { arr1, arr2 } from './FeatureContent';
import './App.css';

function App() {  
  return (
    <>      
      <NavBarMain />
      <Stage />
      {arr1.map(({a, b, dark, order, hide, alt}, i)=>
        <Feature key={i} col1={a} col2={b} dark={dark} order={order} hide={hide} alt={alt}/>
      )}
      <FeatureFive />      
      {arr2.map(({a, b, dark, order, hide, alt}, i)=>
        <Feature key={i} col1={a} col2={b} dark={dark} order={order} hide={hide} alt={alt}/>
      )}
      <MoneyBack />
      <Footer />
    </>
  );
}

export default App;