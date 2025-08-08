import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from '/src/pages/Portfolio';
import AboutPage from '/src/pages/AboutPage.jsx';
import ContactPage from '/src/pages/ContactPage.jsx'; 
import Navigation from '/src/components/Navigation'; 
import Experience from '/src/pages/Experience'; 

function App() {
  return (
    <Router>
      <Navigation /> 
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> 
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
