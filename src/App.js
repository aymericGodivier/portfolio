import './CSS/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { ProjectPage } from './components/ProjectPage';


function App() {
  
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path=":projectId" element={<ProjectPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
