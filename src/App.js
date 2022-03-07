import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Introduction from './components/pages/Introduction';
import Skills from './components/pages/Skills';
import Covid from './components/pages/Covid';
import './styles/survey.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/survey/1" element={<Introduction />} />
        <Route path="/survey/2" element={<Skills />} />
        <Route path="/survey/3" element={<Covid />} />
      </Routes>
    </Router>
  );
}

export default App;
