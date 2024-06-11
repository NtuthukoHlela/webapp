import {HashRouter, Route, Routes } from 'react-router-dom';
import CompetencyPage from './competency.js';
import Home from './Home.js';
import PythonBot from './pythonBot.js'

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
    path ="/Competency" element ={<CompetencyPage/>}>
</Route>

<Route
    path = "/Python" element = {<PythonBot/>}>
</Route>
    

</Routes>
 
</HashRouter>
 
  </>
  
  );
}


