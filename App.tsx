import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FirstVisit from './pages/FirstVisit';
import Program from './pages/Program';
import FAQ from './pages/FAQ';
import Location from './pages/Location';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="first-visit" element={<FirstVisit />} />
          <Route path="program" element={<Program />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="location" element={<Location />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;