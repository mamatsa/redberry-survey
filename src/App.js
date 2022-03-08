import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Introduction from './components/pages/Introduction';
import Skills from './components/pages/Skills';
import Covid from './components/pages/Covid';
import About from './components/pages/About';
import Submit from './components/pages/Submit';
import Thanks from './components/pages/Thanks';
import './styles/survey.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/survey/1" element={<Introduction />} />
        <Route path="/survey/2" element={<Skills />} />
        <Route path="/survey/3" element={<Covid />} />
        <Route path="/survey/4" element={<About />} />
        <Route path="/survey/submit" element={<Submit />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
