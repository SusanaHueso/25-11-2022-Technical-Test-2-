import React from 'react';
import './App.css';
import Body from './components/Body/Body';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import {Home} from './containers/Home/Home'
import {Header} from './components/Header/Header'
import { NewRecipe } from './containers/NewRecipe/NewRecipe';

function App() {
  return (
 
      <BrowserRouter>
         <Header></Header>
        <Routes>
        <Route path='/NewRecipe' element={<NewRecipe/>}/>   
          <Route path='/Body' element={<Body/>}/>   
          <Route path='/' element={<Home/>}/>   
        </Routes>

      </BrowserRouter>
  
      
  );
}

export default App;
