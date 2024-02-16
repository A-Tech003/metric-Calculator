// App.tsx
import React from 'react';
import Home from './pages/Home';
import {BrowserRouter ,Route, Routes } from 'react-router-dom';
import ChoiceNavigationMetrics from './pages/ChoiceNavigationMetrics';
import SolutionSpaceMetrics from './pages/SolutionSpaceMetrics';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/choicenav' element={<ChoiceNavigationMetrics/>}/>
        <Route path='/solutionSpace' element= {<SolutionSpaceMetrics/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
