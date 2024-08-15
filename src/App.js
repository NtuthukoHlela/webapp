import {HashRouter, Route, Routes } from 'react-router-dom';
import CompetencyPage from './competency.js';
import Home from './Home.js';
import PythonBot from './pythonBot.js';
import MarkManson from './Manson_not_giving_a_fuck.js';
import Ntuthuko from './ntuthuko.js'
import React_component from './React_Component_algo.js'

export default function App() {
  return (
    <>
<HashRouter>
<Routes>

  
<Route
    exact path ="/" 
    element ={<Home/>}>
</Route>

<Route
    path ="/ntuthuko" element ={<Ntuthuko/>}>
</Route>

<Route
    path ="/Competency" element ={<CompetencyPage/>}>
</Route>

<Route
    path = "/Python" element = {<PythonBot/>}>
</Route>

<Route
    path = "/Mark Manson" element = {<MarkManson/>}>
</Route>

<Route
    path = "/React Native Component" element = {<React_component/>}>
</Route>

  


</Routes>
 
</HashRouter>
 
  </>
  
  );
}


