import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
  Welcome,
  Introduction,
  Skills,
  Covid,
  About,
  Submit,
  Thanks,
  Applications,
} from 'pages';
import 'styles/survey.css';

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
        <Route path="/applications" element={<Applications />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
