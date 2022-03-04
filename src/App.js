import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/pages/Welcome';
import Introduction from './components/pages/Introduction';
import Skills from './components/pages/Skills';
import './styles/survey.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/survey/1" element={<Introduction />} />
        <Route path="/survey/2" element={<Skills />} />
      </Routes>
    </Router>
  );
}

export default App;
