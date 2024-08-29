import './CSS/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './i18n';
import i18next from 'i18next';
import { Header } from './components/header';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
