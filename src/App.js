import './CSS/App.css';
import { FilterProvider } from './context/FilterContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import LegalNotice from './pages/Legal-notice';
import { ProjectPage } from './components/ProjectPage';


function App() {
  
  return (
    <FilterProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path=":projectId" element={<ProjectPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </FilterProvider>
    
  );
}

export default App;
