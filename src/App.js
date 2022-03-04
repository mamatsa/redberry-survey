import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Introduction from './components/Introduction';
import './styles/survey.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/survey/1" element={<Introduction />} />
      </Routes>
    </Router>
  );
}

export default App;
