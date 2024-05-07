import {BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import CompetencyPage from './competency.js';
import Home from './Home.js';

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
  </Routes>
 
  </HashRouter>
 
  </>
  
  );
}


